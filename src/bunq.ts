import { type Result, err, ok } from 'neverthrow';
import { BunqPublic } from './bunq-public';
import type {
  BunqMeFundraiserProfileUserListing,
  BunqMeTab,
  BunqMeTabCreate,
  BunqMeTabRead,
  MonetaryAccountListing,
  MonetaryAccountRead,
  NotificationFilterUrlMonetaryAccountListing,
  PaymentListing,
  SessionServerCreate,
  UserListing,
  UserRead,
} from './models/Api';

import debug from 'debug';
import type {
  GenerateRSA2048KeyPairFunction,
  SHA256SignDataToB64Function,
} from './crypto';
import type { BunqStorage } from './storage';

const log = debug('bunq-api-client:bunq');

type BunqResponse<T> = { Response: T[] };

export class Bunq {
  session?: SessionServerCreate;
  private apiKey: string;
  private apiContext: { clientPrivateKey: string; installationToken: string };
  public bunqPublic: BunqPublic;
  private storage?: BunqStorage;

  constructor(
    apiKey: string,
    context: { clientPrivateKey: string; installationToken: string },
    private functions: {
      signData: SHA256SignDataToB64Function;
      generateRSA2048KeyPair: GenerateRSA2048KeyPairFunction;
    },
    config?: {
      useSandbox?: boolean;
      sessionToken?: string;
      storage?: BunqStorage;
      baseUrlOverride?: string;
    },
  ) {
    this.bunqPublic = new BunqPublic(
      this.functions,
      config?.useSandbox ? 'SANDBOX' : 'PRODUCTION',
      config?.baseUrlOverride,
    );
    this.apiKey = apiKey;
    this.apiContext = context;
    this.session = config?.sessionToken
      ? {
          Token: {
            token: config?.sessionToken,
          },
        }
      : undefined;
    this.storage = config?.storage;
  }

  async saveCurrentState() {
    if (this.storage) {
      await this.storage.set('apiKey', this.apiKey);
      await this.storage.set(
        'clientPrivateKey',
        this.apiContext.clientPrivateKey,
      );
      await this.storage.set(
        'installationToken',
        this.apiContext.installationToken,
      );
      if (this.session?.Token?.token) {
        await this.storage.set('sessionToken', this.session.Token.token);
      }
    }
  }

  static async fromStorage(
    storage: BunqStorage,
    functions: {
      signData: SHA256SignDataToB64Function;
      generateRSA2048KeyPair: GenerateRSA2048KeyPairFunction;
    },
    config?: {
      useSandbox?: boolean;
      sessionToken?: string;
      baseUrlOverride?: string;
    },
  ): Promise<Bunq> {
    const apiKey = await storage.get('apiKey');
    const clientPrivateKey = await storage.get('clientPrivateKey');
    const installationToken = await storage.get('installationToken');
    const sessionToken = await storage.get('sessionToken');

    if (!apiKey || !clientPrivateKey || !installationToken) {
      throw new Error('No api key found in storage');
    }

    return new Bunq(
      apiKey,
      {
        clientPrivateKey,
        installationToken,
      },
      functions,
      {
        storage,
        sessionToken,
        ...config,
      },
    );
  }

  async getPayments({
    ofUserId,
    monetaryAccountId,
    count,
  }: {
    ofUserId?: number;
    monetaryAccountId: string;
    count?: number;
  }): Promise<
    Result<{ Payment: PaymentListing }[], { message: string; status: number }>
  > {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const rawResponse = await this.makeRequest<
      BunqResponse<{ Payment: PaymentListing }>
    >(
      `/user/${userId}/monetary-account/${monetaryAccountId}/payment?count=${
        count ?? 10
      }`,
      'GET',
      undefined,
      {
        joinResp: false,
        useInstallToken: false,
      },
    );

    return rawResponse.andThen((response) => {
      return ok(response.Response);
    });
  }

  async getBunqMeTab({
    ofUserId,
    monetaryAccountId,
    bunqMeTabId,
  }: {
    ofUserId?: number;
    monetaryAccountId: string;
    bunqMeTabId: string;
  }): Promise<Result<BunqMeTabRead, { message: string; status: number }>> {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<BunqMeTabRead>(
      `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab/${bunqMeTabId}`,
      'GET',
      undefined,
      {
        joinResp: true,
        useInstallToken: false,
      },
    );

    return response;
  }

  async markBunqMeTab({
    ofUserId,
    monetaryAccountId,
    bunqMeTabId,
    markAs,
  }: {
    ofUserId?: number;
    monetaryAccountId: string;
    bunqMeTabId: string;
    markAs: 'WAITING_FOR_PAYMENT' | 'CANCELLED' | 'EXPIRED' | 'PAID';
  }): Promise<Result<BunqMeTab, { message: string; status: number }>> {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<BunqMeTab>(
      `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab/${bunqMeTabId}`,
      'PUT',
      {
        status: markAs,
      },
      {
        joinResp: true,
        useInstallToken: false,
      },
    );

    return response;
  }

  async getWebhooks({
    ofUserId,
    monetaryAccountId,
  }: {
    ofUserId?: number;
    monetaryAccountId: string;
  }): Promise<
    Result<
      NotificationFilterUrlMonetaryAccountListing[],
      { message: string; status: number }
    >
  > {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<
      BunqResponse<NotificationFilterUrlMonetaryAccountListing>
    >(
      `/user/${userId}/monetary-account/${monetaryAccountId}/notification-filter-url`,
      'GET',
      undefined,
      {
        joinResp: false,
        useInstallToken: false,
      },
    );

    return response.andThen((response) => {
      return ok(response.Response);
    });
  }

  async registerWebhooks({
    ofUserId,
    monetaryAccountId,
    targetUrl,
  }: {
    ofUserId?: number;
    monetaryAccountId: string;
    targetUrl: string;
  }) {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const CATEGORIES = [
      // "BILLING", // notifications for all bunq invoices
      // "CARD_TRANSACTION_SUCCESSFUL", // notifications for successful card transactions
      // "CARD_TRANSACTION_FAILED", // notifications for failed card transaction
      // "CHAT", // notifications for received chat messages
      // "DRAFT_PAYMENT", // notifications for creation and updates of draft payments
      // "IDEAL", // notifications for iDEAL-deposits towards a bunq account
      // "SOFORT", // notifications for SOFORT-deposits towards a bunq account
      'MUTATION', // notifications for any action that affects a monetary account’s balance
      // "OAUTH", // notifications for revoked OAuth connections
      // "PAYMENT", // notifications for payments created from, or received on a bunq account (doesn’t include payments that result out of paying a Request, iDEAL, Sofort or Invoice). Outgoing payments have a negative value while incoming payments have a positive value
      // "REQUEST", // notifications for incoming requests and updates on outgoing requests
      // "SCHEDULE_RESULT", // notifications for when a scheduled payment is executed
      // "SCHEDULE_STATUS", // notifications about the status of a scheduled payment, e.g. when the scheduled payment is updated or cancelled
      // "SHARE", // notifications for any updates or creation of Connects (ShareInviteBankInquiry)
      // "TAB_RESULT", // notifications for updates on Tab payments
      // "BUNQME_TAB", // notifications for updates on bunq.me Tab (open request) payments
      // "SUPPORT", // notifications for messages received from us through support chat
    ];

    const response = await this.makeRequest<
      BunqResponse<NotificationFilterUrlMonetaryAccountListing>
    >(
      `/user/${userId}/monetary-account/${monetaryAccountId}/notification-filter-url`,
      'POST',
      {
        notification_filters: CATEGORIES.map((c) => {
          return {
            category: c,
            notification_target: targetUrl,
          };
        }),
      },
      {
        joinResp: false,
        useInstallToken: false,
      },
    );

    return response.andThen((resp) => {
      return ok(resp.Response);
    });
  }

  async bunqmeTabRequest({
    ofUserId,
    monetaryAccountId,
    value,
    description,
    redirectUrl,
  }: {
    redirectUrl: string;
    description: string;
    value: string;
    monetaryAccountId: string;
    ofUserId?: number;
  }) {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<BunqMeTabCreate>(
      `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab`,
      'POST',
      {
        bunqme_tab_entry: {
          amount_inquired: {
            value,
            currency: 'EUR',
          },
          description,
          redirect_url: redirectUrl,
        },
      },
      {
        joinResp: true,
        useInstallToken: false,
      },
    );

    return response;
  }

  async getUsers(): Promise<
    Result<UserListing[], { message: string; status: number }>
  > {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const rawResponse = await this.makeRequest<BunqResponse<UserListing>>(
      '/user',
      'GET',
      undefined,
      {
        useInstallToken: false,
        joinResp: false,
      },
    );

    return rawResponse.andThen((response) => {
      return ok(response.Response);
    });
  }

  async getBunqMeFundraiserProfile(profileId: number, ofUserId?: number) {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<BunqMeFundraiserProfileUserListing>(
      `/user/${userId}/bunqme-fundraiser-profile/${profileId}`,
      'GET',
      undefined,
      {
        joinResp: true,
        useInstallToken: false,
      },
    );

    return response;
  }
  async getBunqMeFundraiserProfiles(ofUserId?: number) {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const rawResponse = await this.makeRequest<
      BunqResponse<BunqMeFundraiserProfileUserListing>
    >(`/user/${userId}/bunqme-fundraiser-profile`, 'GET', undefined, {
      joinResp: false,
      useInstallToken: false,
    });

    return rawResponse.andThen((response) => {
      return ok(response.Response);
    });
  }

  async getMonetaryAccount(monetaryAccountId: number, ofUserId?: number) {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    return await this.makeRequest<MonetaryAccountRead>(
      `/user/${userId}/monetary-account/${monetaryAccountId}`,
      'GET',
      undefined,
      {
        joinResp: true,
        useInstallToken: false,
      },
    );
  }

  async getMonetaryAccounts(
    ofUserId?: number,
  ): Promise<
    Result<MonetaryAccountListing[], { message: string; status: number }>
  > {
    const session = await this.getSession();
    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const rawResponse = await this.makeRequest<
      BunqResponse<MonetaryAccountListing>
    >(`/user/${userId}/monetary-account?count=100`, 'GET', undefined, {
      joinResp: false,
      useInstallToken: false,
    });

    return rawResponse.andThen((response) => {
      return ok(response.Response);
    });
  }

  async getUser(
    ofUserId?: number,
  ): Promise<Result<UserRead, { message: string; status: number }>> {
    const session = await this.getSession();

    if (session.isErr()) {
      return err(session.error);
    }

    const userId =
      ofUserId ?? session.value.UserApiKey?.id ?? session.value.UserPerson?.id;

    if (!userId) {
      return err({
        message: 'No user id provided or found in session',
        status: 0,
      });
    }

    const response = await this.makeRequest<UserRead>(
      `/user/${userId}`,
      'GET',
      undefined,
      {
        useInstallToken: false,
        joinResp: true,
      },
    );

    return response;
  }

  // #endregion

  async getSession(
    refresh?: boolean,
  ): Promise<Result<SessionServerCreate, { message: string; status: number }>> {
    if (this.session && !refresh) {
      return ok(this.session);
    }

    const rawSession = await this.getRawSession();
    if (rawSession.isErr()) {
      return err(rawSession.error);
    }

    this.session = rawSession.value;

    if (this.storage && this.session.Token?.token) {
      await this.storage.set('sessionToken', this.session.Token.token);
    }

    return ok(this.session);
  }

  async getRawSession(): Promise<
    Result<SessionServerCreate, { message: string; status: number }>
  > {
    return this.makeRequest<SessionServerCreate>(
      '/session-server',
      'POST',
      {
        secret: this.apiKey,
      },
      {
        joinResp: true,
        useInstallToken: true,
      },
    );
  }

  private async makeRequest<T = unknown>(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    payload?: unknown,
    options?: {
      joinResp?: boolean;
      useInstallToken?: boolean;
      skipReauth?: boolean;
    },
  ): Promise<Result<T, { message: string; status: number }>> {
    if (!options?.useInstallToken && !this.session?.Token?.token) {
      return err({ message: 'No session found', status: 0 });
    }

    // defaults
    let body = undefined;
    let headers: { [key: string]: string } = {
      'X-Bunq-Client-Request-Id': '1',
      'X-Bunq-Geolocation': '0 0 0 0 NL',
      'X-Bunq-Language': 'en_US',
      'X-Bunq-Client-Authentication': options?.useInstallToken
        ? this.apiContext.installationToken
        : // biome-ignore lint/style/noNonNullAssertion: Session is checked above.
          this.session!.Token!.token!,
    };

    // sign request
    if (payload) {
      body = JSON.stringify(payload);
      const signature = await this.functions.signData(
        body,
        this.apiContext.clientPrivateKey,
      );

      headers = {
        ...headers,
        'X-Bunq-Client-Signature': signature,
        'Content-Type': 'application/json',
      };
    }

    const response = await this.bunqPublic.makeRequest<T>(
      path,
      method,
      payload,
      headers,
      {
        joinResp: options?.joinResp,
      },
    );

    if (
      response.isErr() &&
      response.error.status === 401 &&
      options?.useInstallToken !== true &&
      !options?.skipReauth
    ) {
      const session = await this.getSession(true);
      if (session.isErr()) {
        return response;
      }

      return this.makeRequest<T>(path, method, payload, {
        ...options,
        skipReauth: true,
      });
    }

    return response;
  }

  // #endregion
}
