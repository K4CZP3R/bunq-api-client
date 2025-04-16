import { type Result, err, ok } from 'neverthrow';
import type {
  GenerateRSA2048KeyPairFunction,
  SHA256SignDataToB64Function,
} from './crypto';
import type {
  Error as BunqError,
  DeviceServerCreate,
  InstallationCreate,
} from './models/Api';

import debug from 'debug';

const log = debug('bunq-api-client:public');

function combineResponses(responses: unknown): unknown {
  // Check if responses is an array
  if (!Array.isArray(responses)) {
    throw new Error('Responses is not an array');
  }

  return responses.reduce((acc, response) => {
    return {
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      ...acc,
      ...response,
    };
  }, {});
}

export class BunqPublic {
  private baseUrl: string;

  constructor(
    private functions: {
      signData: SHA256SignDataToB64Function;
      generateRSA2048KeyPair: GenerateRSA2048KeyPairFunction;
    },
    public env: 'SANDBOX' | 'PRODUCTION' = 'SANDBOX',
    private baseUrlOverride?: string,
  ) {
    this.baseUrl =
      env === 'SANDBOX'
        ? 'https://public-api.sandbox.bunq.com/v1/'
        : 'https://api.bunq.com/v1';
    log(`Using base url: ${this.baseUrl}`);
  }

  public async createInstallation(
    publicKey: string,
  ): Promise<Result<InstallationCreate, { message: string; status: number }>> {
    log(
      `Creating installation with public key: ${publicKey.substring(0, 10)}...`,
    );
    return this.makeRequest<InstallationCreate>(
      '/installation',
      'POST',
      {
        client_public_key: publicKey,
      },
      {
        'X-Bunq-Client-Request-Id': '1',
        'X-Bunq-Geolocation': '0 0 0 0 NL',
        'X-Bunq-Language': 'en_US',
      },
      {
        joinResp: true,
      },
    );
  }

  public async createDevice(
    bunqToken: string,
    clientPrivateKey: string,
    installationToken: string,
    deviceName?: string,
  ): Promise<Result<DeviceServerCreate, { message: string; status: number }>> {
    const payload = {
      description: deviceName ?? 'bunq-api',
      secret: bunqToken,
      permitted_ips: ['*'],
    };
    log(`Creating device with payload: ${JSON.stringify(payload)}`);
    const signature = await this.functions.signData(
      JSON.stringify(payload),
      clientPrivateKey,
    );
    log(`Signature: ${signature}`);

    return this.makeRequest<DeviceServerCreate>(
      '/device-server',
      'POST',
      payload,
      {
        'X-Bunq-Client-Request-Id': '1',
        'X-Bunq-Geolocation': '0 0 0 0 NL',
        'X-Bunq-Language': 'en_US',
        'X-Bunq-Client-Authentication': installationToken,
        'X-Bunq-Client-Signature': signature,
      },
      {
        joinResp: true,
      },
    );
  }

  async makeRequest<T>(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    payload?: unknown,
    headers?: Record<string, string>,
    options?: {
      joinResp?: boolean;
    },
  ): Promise<Result<T, { message: string; status: number }>> {
    const url = `${this.baseUrlOverride ?? this.baseUrl}${path}`;
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const parsed = data as { Error: BunqError };

      const errors = parsed.Error.map((e) => e.error_description);

      return err({ message: errors.join('\n'), status: response.status });
    }

    if (options?.joinResp) {
      return ok(
        combineResponses((data as { Response: unknown[] }).Response) as T,
      );
    }
    return ok(data as T);
  }
}
