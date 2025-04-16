/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdditionalInformation {
  /** The category of the refund, required for chargeback. */
  category?: string;
  /** The reason to refund, required for chargeback. */
  reason?: string;
  /** Comment about the refund. */
  comment?: string;
  /** The Attachments to attach to the refund request. */
  attachment?: AttachmentMasterCardActionRefund[];
  /** Proof that the user acknowledged the terms and conditions for chargebacks. */
  terms_and_conditions?: string;
}

export interface AdditionalTransactionInformationCategory {
  /** The category. */
  category?: string;
  /** Who created this category. */
  type?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status?: string;
  /** The sort order of the category. */
  order?: number;
  /** The description of the category. */
  description?: string;
  /** The translation of the description of the category. */
  description_translated?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryListing {
  /** The category. */
  category?: string;
  /** Who created this category. */
  type?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status?: string;
  /** The sort order of the category. */
  order?: number;
  /** The description of the category. */
  description?: string;
  /** The translation of the description of the category. */
  description_translated?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryUserDefined {
  /** The category. */
  category?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status: string;
  /** The description of the category. */
  description?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryUserDefinedCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Address {
  /** The street. */
  street?: string;
  /** The house number. */
  house_number?: string;
  /** The PO box. */
  po_box?: string;
  /** The postal code. */
  postal_code?: string;
  /** The city. */
  city?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The apartment, building or other extra information for addresses. */
  extra?: string;
  /** The name on the mailbox (only used for Postal and Shipping addresses). */
  mailbox_name?: string;
  /** The province according to local standard. */
  province?: string;
  /** To show whether user created or updated her address for app event listing. */
  is_user_address_updated?: boolean;
}

export interface Amount {
  /** The amount formatted to two decimal places. */
  value?: string;
  /** The currency of the amount. It is an ISO 4217 formatted currency code. */
  currency?: string;
}

export interface Attachment {
  /** The description of the attachment. */
  description?: string;
  /** The content type of the attachment's file. */
  content_type?: string;
  /** The URLs where the file can be downloaded. */
  urls?: AttachmentUrl[];
}

export type AttachmentConversationContentListing = object;

export interface AttachmentMasterCardActionRefund {
  /** The id of the attached Attachment. */
  id?: number;
}

export type AttachmentMonetaryAccount = object;

export type AttachmentMonetaryAccountContentListing = object;

export interface AttachmentMonetaryAccountCreate {
  /** The ID of the attachment created. */
  id?: number;
}

export interface AttachmentMonetaryAccountPayment {
  /** The id of the attached Attachment. */
  id?: number;
  /** The id of the MonetaryAccount this Attachment is attached from. */
  monetary_account_id?: number;
}

export type AttachmentPublic = object;

export type AttachmentPublicContentListing = object;

export interface AttachmentPublicCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface AttachmentPublicRead {
  /** The UUID of the attachment. */
  uuid?: string;
  /** The timestamp of the attachment's creation. */
  created?: string;
  /** The timestamp of the attachment's last update. */
  updated?: string;
  /** The attachment. */
  attachment?: Attachment;
}

export interface AttachmentUrl {
  /** The file type of attachment. */
  type?: string;
  /** The URL where the attachment can be downloaded. */
  url?: string;
}

export type AttachmentUserContentListing = object;

export interface AttachmentUserRead {
  /** The id of the attachment. */
  id?: number;
  /** The timestamp of the attachment's creation. */
  created?: string;
  /** The timestamp of the attachment's last update. */
  updated?: string;
  /** The attachment. */
  attachment?: Attachment;
}

export interface Avatar {
  /** The public UUID of the avatar. */
  uuid?: string;
  /** The public UUID of object this avatar is anchored to. */
  anchor_uuid?: string;
  /** The actual image information of this avatar. */
  image?: Image[];
  /** The style (if applicable) for this Avatar. */
  style?: string;
}

export interface AvatarCreate {
  /** The UUID of the created avatar. */
  uuid?: string;
}

export interface AvatarRead {
  /** The UUID of the created avatar. */
  uuid?: string;
  /** The content type of the image. */
  image?: Image[];
}

export interface BankSwitchServiceNetherlandsIncoming {
  /** The label of the monetary of this switch service. */
  alias?: LabelMonetaryAccount;
  /** The IBAN alias that's displayed for this switch service. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status of the switch service. */
  status?: string;
  /** The label of the user creator of this switch service. */
  user_alias?: LabelUser;
  /** The sub status of the switch service. */
  sub_status?: string;
  /** The timestamp when the switch service desired to be start. */
  time_start_desired?: string;
  /** The timestamp when the switch service actually starts. */
  time_start_actual?: string;
  /** The timestamp when the switch service ends. */
  time_end?: string;
  /** Reference to the bank transfer form for this switch-service. */
  attachment?: Attachment;
  /** Rejection reason enum. */
  rejection_reason?: string;
  /** Rejection reason description to be shown to the user. */
  rejection_reason_description?: string;
  /** Rejection reason description to be shown to the user, translated. */
  rejection_reason_description_translated?: string;
  /** Rejection reason together URL. */
  rejection_reason_together_url?: string;
}

export interface BankSwitchServiceNetherlandsIncomingPayment {
  /** The bank switch service details. */
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming;
  /** The payment made using bank switch service. */
  payment?: Payment;
}

export interface BankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The bank switch service details. */
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming;
  /** The payment made using bank switch service. */
  payment?: Payment;
}

export interface BillingContractSubscription {
  /** The subscription type of the user. Can be one of PERSON_SUPER_LIGHT_V1, PERSON_LIGHT_V1, PERSON_MORE_V1, PERSON_FREE_V1, PERSON_PREMIUM_V1, COMPANY_V1, or COMPANY_V2. */
  subscription_type?: string;
  /** The id of the billing contract. */
  id?: number;
  /** The timestamp when the billing contract was made. */
  created?: string;
  /** The timestamp when the billing contract was last updated. */
  updated?: string;
  /** The date from when the billing contract is valid. */
  contract_date_start?: string;
  /** The date until when the billing contract is valid. */
  contract_date_end?: string;
  /** The version of the billing contract. */
  contract_version?: number;
  /** The subscription type the user will have after a subscription downgrade. Will be null if downgrading is not possible. */
  subscription_type_downgrade?: string;
  /** The subscription status. */
  status?: string;
  /** The subscription substatus. */
  sub_status?: string;
}

export interface BillingContractSubscriptionListing {
  /** The id of the billing contract. */
  id?: number;
  /** The timestamp when the billing contract was made. */
  created?: string;
  /** The timestamp when the billing contract was last updated. */
  updated?: string;
  /** The date from when the billing contract is valid. */
  contract_date_start?: string;
  /** The date until when the billing contract is valid. */
  contract_date_end?: string;
  /** The version of the billing contract. */
  contract_version?: number;
  /** The subscription type of the user. Can be one of PERSON_SUPER_LIGHT_V1, PERSON_LIGHT_V1, PERSON_MORE_V1, PERSON_FREE_V1, PERSON_PREMIUM_V1, COMPANY_V1, or COMPANY_V2. */
  subscription_type?: string;
  /** The subscription type the user will have after a subscription downgrade. Will be null if downgrading is not possible. */
  subscription_type_downgrade?: string;
  /** The subscription status. */
  status?: string;
  /** The subscription substatus. */
  sub_status?: string;
}

export interface BirdeeInvestmentPortfolio {
  /** The type of risk profile associated with the portfolio. */
  risk_profile_type?: string;
  /** The investment theme. */
  investment_theme?: string;
  /** The name associated with the investment portfolio. */
  name?: string;
  /** The investment goal. */
  goal?: BirdeeInvestmentPortfolioGoal;
  /** Status of the portfolio. */
  status?: string;
  /** Maximum number of strategy changes in a year. */
  number_of_strategy_change_annual_maximum?: number;
  /** Maximum number of strategy changes used. */
  number_of_strategy_change_annual_used?: number;
  /** The external identifier of the portfolio. */
  external_identifier?: string;
  /** The investment portfolio balance. */
  balance?: BirdeeInvestmentPortfolioBalance;
  /** The allocations of the investment portfolio. */
  allocations?: BirdeePortfolioAllocation[];
}

export interface BirdeeInvestmentPortfolioBalance {
  /** The current valuation of the portfolio, minus any amount pending withdrawal. */
  amount_available?: Amount;
  /** The total amount deposited. */
  amount_deposit_total?: Amount;
  /** The total amount withdrawn. */
  amount_withdrawal_total?: Amount;
  /** The total fee amount. */
  amount_fee_total?: Amount;
  /** The difference between the netto deposited amount and the current valuation. */
  amount_profit?: Amount;
  /** The amount that's sent to Birdee, but pending investment on the portfolio. */
  amount_deposit_pending?: Amount;
  /** The amount that's sent to Birdee, but pending withdrawal. */
  amount_withdrawal_pending?: Amount;
}

export interface BirdeeInvestmentPortfolioGoal {
  /** The investment goal amount. */
  amount_target?: Amount;
  /** The investment goal end time. */
  time_end?: string;
}

export interface BirdeePortfolioAllocation {
  /** Currency of the instrument. */
  instrument_currency?: string;
  /** Asset Class of the instrument. */
  instrument_asset_class?: string;
  /** Name of the asset class. */
  instrument_asset_class_name?: string;
  /** ISIN code of the instrument. */
  instrument_isin?: string;
  /** Name of the instrument. */
  instrument_name?: string;
  /** Name of the geographical region covered by the instrument */
  instrument_region_name?: string;
  /** Key Information Document of the instrument. */
  instrument_key_information_document_uri?: string;
  /** Weight of the financial instrument in the model portfolio. */
  weight?: string;
  /** Quantity of the financial instrument in the portfolio. */
  quantity?: string;
  /** Unit price of the financial instrument. */
  price?: string;
  /** Monetary amount of the financial instrument in the portfolio. */
  amount?: string;
}

export interface BunqId {
  /** An integer ID of an object. Unique per object type. */
  id?: number;
}

export interface BunqMeFundraiserProfile {
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment attached to the fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** Provided if the user has enabled their invite link. */
  invite_profile_name?: string;
  /** List of available merchants. */
  merchant_available?: BunqMeMerchantAvailable[];
}

export interface BunqMeFundraiserProfileUserListing {
  /** Id of the monetary account on which you want to receive bunq.me payments. */
  monetary_account_id?: number;
  /** Id of the user owning the profile. */
  owner_user_id?: number;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment used for the background of the bunq.me fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
}

export interface BunqMeFundraiserProfileUserRead {
  /** Id of the monetary account on which you want to receive bunq.me payments. */
  monetary_account_id?: number;
  /** Id of the user owning the profile. */
  owner_user_id?: number;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment used for the background of the bunq.me fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
}

export interface BunqMeFundraiserResult {
  /** The id of the bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The bunq.me fundraiser profile. */
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile;
  /** The list of payments, paid to the bunq.me fundraiser profile. */
  payments?: Payment[];
}

export interface BunqMeFundraiserResultRead {
  /** The id of the bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The bunq.me fundraiser profile. */
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile;
  /** The list of payments, paid to the bunq.me fundraiser profile. */
  payments?: Payment[];
}

export interface BunqMeMerchantAvailable {
  /** A merchant type supported by bunq.me. */
  merchant_type?: string;
  /** Whether or not the merchant is available for the user. */
  available?: boolean;
}

export interface BunqMeTab {
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry: BunqMeTabEntry;
  /** The status of the bunq.me. Ignored in POST requests but can be used for cancelling the bunq.me by setting status as CANCELLED with a PUT request. */
  status?: string;
  /** The ID of the related event if the bunqMeTab made by 'split' functionality. */
  event_id?: number;
}

export interface BunqMeTabCreate {
  /** The id of the created bunq.me. */
  id?: number;
}

export interface BunqMeTabEntry {
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The description for the bunq.me. Maximum 9000 characters. */
  description?: string;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The uuid of the bunq.me. */
  uuid?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias?: LabelMonetaryAccount;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** List of available merchants. */
  merchant_available?: BunqMeMerchantAvailable[];
  /** Provided if the user has enabled their invite link. */
  invite_profile_name?: string;
}

export interface BunqMeTabListing {
  /** The id of the created bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The timestamp of when the bunq.me expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the bunq.me was sent from. */
  monetary_account_id?: number;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** The type of the bunq.me Tab. Should be BUNQ_ME */
  type?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias_monetary_account?: LabelMonetaryAccount;
  /** The url that points to the bunq.me page. */
  bunqme_tab_share_url?: string;
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry?: BunqMeTabEntry;
  /** The bunq.me tab entries attached to this bunq.me Tab. */
  bunqme_tab_entries?: BunqMeTabEntry[];
  /** The list of bunq.me result Inquiries successfully made and paid. */
  result_inquiries?: BunqMeTabResultInquiry[];
}

export interface BunqMeTabRead {
  /** The id of the created bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The timestamp of when the bunq.me expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the bunq.me was sent from. */
  monetary_account_id?: number;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** The type of the bunq.me Tab. Should be BUNQ_ME */
  type?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias_monetary_account?: LabelMonetaryAccount;
  /** The url that points to the bunq.me page. */
  bunqme_tab_share_url?: string;
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry?: BunqMeTabEntry;
  /** The bunq.me tab entries attached to this bunq.me Tab. */
  bunqme_tab_entries?: BunqMeTabEntry[];
  /** The list of bunq.me result Inquiries successfully made and paid. */
  result_inquiries?: BunqMeTabResultInquiry[];
}

export interface BunqMeTabResultInquiry {
  /** The payment made for the Tab. */
  payment?: Payment;
  /** The Id of the bunq.me tab that this BunqMeTabResultInquiry belongs to. */
  bunq_me_tab_id?: number;
}

export interface BunqMeTabResultResponse {
  /** The payment made for the bunq.me tab. */
  payment?: Payment;
}

export interface BunqMeTabResultResponseRead {
  /** The payment made for the bunq.me tab. */
  payment?: Payment;
}

export interface BunqMeTabUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Card {
  /** The plaintext pin code. Requests require encryption to be enabled. */
  pin_code?: string;
  /** DEPRECATED: Activate a card by setting status to ACTIVE when the order_status is ACCEPTED_FOR_PRODUCTION. */
  activation_code?: string;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN or CANCELLED, and can only be set to LOST/STOLEN/CANCELLED when order status is ACCEPTED_FOR_PRODUCTION/DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Can only be set to DEACTIVATED after initial activation, i.e. order_status is DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Mind that all the possible choices (apart from ACTIVE and DEACTIVATED) are permanent and cannot be changed after. */
  status?: string;
  /** The order status to set for the card. Set to CARD_REQUEST_PENDING to get a virtual card produced. */
  order_status?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The user's preferred name as it will be on the card. */
  preferred_name_on_card?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** The reason for card cancellation. */
  cancellation_reason?: string;
}

export interface CardBatch {
  /** The cards that need to be updated. */
  cards: CardBatchEntry[];
}

export interface CardBatchCreate {
  /** The ids of the cards that have been updated. */
  updated_card_ids?: BunqId[];
}

export interface CardBatchEntry {
  /** The ID of the card that needs to be updated. */
  id: number;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN or CANCELLED, and can only be set to LOST/STOLEN/CANCELLED when order status is ACCEPTED_FOR_PRODUCTION/DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Can only be set to DEACTIVATED after initial activation, i.e. order_status is DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Mind that all the possible choices (apart from ACTIVE and DEACTIVATED) are permanent and cannot be changed after. */
  status?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
}

export interface CardBatchReplace {
  /** The cards that need to be replaced. */
  cards: CardBatchReplaceEntry[];
}

export interface CardBatchReplaceCreate {
  /** The ids of the cards that have been replaced. */
  updated_card_ids?: BunqId[];
}

export interface CardBatchReplaceEntry {
  /** The ID of the card that needs to be replaced. */
  id: number;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card?: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** The second line on the card. */
  second_line?: string;
}

export interface CardCountryPermission {
  /** The country to allow transactions in (e.g. NL, DE). */
  country?: string;
  /** Expiry time of this rule. */
  expiry_time?: string;
  /** The id of the card country permission entry. */
  id?: number;
}

export interface CardCredit {
  /** The first line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  first_line?: string;
  /** The second line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  second_line: string;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** The pointer to the monetary account that will be connected at first with the card. Its IBAN code is also the one that will be printed on the card itself. The pointer must be of type IBAN. */
  alias?: Pointer;
  /** The type of card to order. Can be MASTERCARD. */
  type: string;
  /** The product type of the card to order. */
  product_type: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The order status of this card. Can be CARD_REQUEST_PENDING or VIRTUAL_DELIVERY. */
  order_status?: string;
}

export interface CardCreditCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardDebit {
  /** The second line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  second_line: string;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** The pointer to the monetary account that will be connected at first with the card. Its IBAN code is also the one that will be printed on the card itself. The pointer must be of type IBAN. */
  alias?: Pointer;
  /** The type of card to order. Can be MAESTRO or MASTERCARD. */
  type: string;
  /** The product type of the card to order. */
  product_type: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The order status of this card. Can be CARD_REQUEST_PENDING or VIRTUAL_DELIVERY. */
  order_status?: string;
}

export interface CardDebitCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardGeneratedCvc2 {
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
}

export interface CardGeneratedCvc2Create {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardGeneratedCvc2Listing {
  /** The id of the cvc code. */
  id?: number;
  /** The timestamp of the cvc code's creation. */
  created?: string;
  /** The timestamp of the cvc code's last update. */
  updated?: string;
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
  /** The cvc2 code. */
  cvc2?: string;
  /** The status of the cvc2. Can be AVAILABLE, USED, EXPIRED, BLOCKED. */
  status?: string;
  /** Expiry time of the cvc2. */
  expiry_time?: string;
}

export interface CardGeneratedCvc2Read {
  /** The id of the cvc code. */
  id?: number;
  /** The timestamp of the cvc code's creation. */
  created?: string;
  /** The timestamp of the cvc code's last update. */
  updated?: string;
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
  /** The cvc2 code. */
  cvc2?: string;
  /** The status of the cvc2. Can be AVAILABLE, USED, EXPIRED, BLOCKED. */
  status?: string;
  /** Expiry time of the cvc2. */
  expiry_time?: string;
}

export interface CardGeneratedCvc2Update {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardListing {
  /** The id of the card. */
  id?: number;
  /** The timestamp of the card's creation. */
  created?: string;
  /** The timestamp of the card's last update. */
  updated?: string;
  /** The public UUID of the card. */
  public_uuid?: string;
  /** DEPRECATED. ID of the user who is owner of the card. */
  user_id?: number;
  /** ID of the user who is owner of the card. */
  user_owner_id?: number;
  /** ID of the user who is holder of the card. */
  user_holder_id?: number;
  /** The type of the card. Can be MAESTRO, MASTERCARD. */
  type?: string;
  /** The sub-type of the card. */
  sub_type?: string;
  /** The product type of the card. */
  product_type?: string;
  /** The product sub-type of the card. */
  product_sub_type?: string;
  /** The first line of text on the card */
  first_line?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN, CANCELLED, EXPIRED or PIN_TRIES_EXCEEDED. */
  status?: string;
  /** The sub-status of the card. Can be NONE or REPLACED. */
  sub_status?: string;
  /** The order status of the card. Can be NEW_CARD_REQUEST_RECEIVED, CARD_REQUEST_PENDING, SENT_FOR_PRODUCTION, ACCEPTED_FOR_PRODUCTION, DELIVERED_TO_CUSTOMER, CARD_UPDATE_REQUESTED, CARD_UPDATE_PENDING, CARD_UPDATE_SENT, CARD_UPDATE_ACCEPTED, VIRTUAL_DELIVERY, NEW_CARD_REQUEST_PENDING_USER_APPROVAL, SENT_FOR_DELIVERY or NEW_CARD_REQUEST_CANCELLED. */
  order_status?: string;
  /** Expiry date of the card. */
  expiry_date?: string;
  /** The user's name on the card. */
  name_on_card?: string;
  /** The user's preferred name on the card. */
  preferred_name_on_card?: string;
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** The payment account reference number associated with the card. */
  payment_account_reference?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** The monetary account this card was ordered on and the label user that owns the card. */
  label_monetary_account_ordered?: LabelMonetaryAccount;
  /** The monetary account that this card is currently linked to and the label user viewing it. */
  label_monetary_account_current?: LabelMonetaryAccount;
  /** Current monetary account (only for prepaid credit cards). */
  monetary_account?: MonetaryAccount;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The country that is domestic to the card. Defaults to country of residence of user. */
  country?: string;
  /** A tracking link provided by our shipment provider. */
  card_shipment_tracking_url?: string;
  /** Whether this card is eligible for a free replacement. */
  is_card_eligible_for_free_replacement?: boolean;
  /** The card replacement for this card. */
  card_replacement?: CardReplacement;
  /** The generated CVC2 code for this card. */
  card_generated_cvc2?: CardGeneratedCvc2;
  /** Whether this card is a limited edition metal card. */
  is_limited_edition?: boolean;
  /** The date for the member since field on the black metal card. */
  card_metal_member_since_date?: string;
  /** Details of this card belonging to a company, if applicable. */
  company_employee_card?: CompanyEmployeeCard;
}

export interface CardNameListing {
  /** All possible variations (of suitable length) of user's legal name for the debit card. */
  possible_card_name_array?: string[];
}

export interface CardPinAssignment {
  /** PIN type. Can be PRIMARY, SECONDARY or TERTIARY */
  type?: string;
  /** Routing type. */
  routing_type?: string;
  /** The 4 digit PIN to be assigned to this account. */
  pin_code?: string;
  /** The ID of the monetary account to assign to this pin for the card. */
  monetary_account_id?: number;
  /** The status of the card pin assignment. */
  status?: string;
}

export interface CardPrimaryAccountNumber {
  /** The ID for this Virtual PAN. */
  id?: number;
  /** The description for this PAN. */
  description?: string;
  /** The status for this PAN, only for Online Cards. */
  status?: string;
  /** The ID of the monetary account to assign to this PAN, only for Online Cards. */
  monetary_account_id?: number;
  /** The UUID for this Virtual PAN. */
  uuid?: string;
  /** The last four digits of the PAN. */
  four_digit?: string;
  /** The type of the PAN. */
  type?: string;
}

export interface CardRead {
  /** The id of the card. */
  id?: number;
  /** The timestamp of the card's creation. */
  created?: string;
  /** The timestamp of the card's last update. */
  updated?: string;
  /** The public UUID of the card. */
  public_uuid?: string;
  /** DEPRECATED. ID of the user who is owner of the card. */
  user_id?: number;
  /** ID of the user who is owner of the card. */
  user_owner_id?: number;
  /** ID of the user who is holder of the card. */
  user_holder_id?: number;
  /** The type of the card. Can be MAESTRO, MASTERCARD. */
  type?: string;
  /** The sub-type of the card. */
  sub_type?: string;
  /** The product type of the card. */
  product_type?: string;
  /** The product sub-type of the card. */
  product_sub_type?: string;
  /** The first line of text on the card */
  first_line?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN, CANCELLED, EXPIRED or PIN_TRIES_EXCEEDED. */
  status?: string;
  /** The sub-status of the card. Can be NONE or REPLACED. */
  sub_status?: string;
  /** The order status of the card. Can be NEW_CARD_REQUEST_RECEIVED, CARD_REQUEST_PENDING, SENT_FOR_PRODUCTION, ACCEPTED_FOR_PRODUCTION, DELIVERED_TO_CUSTOMER, CARD_UPDATE_REQUESTED, CARD_UPDATE_PENDING, CARD_UPDATE_SENT, CARD_UPDATE_ACCEPTED, VIRTUAL_DELIVERY, NEW_CARD_REQUEST_PENDING_USER_APPROVAL, SENT_FOR_DELIVERY or NEW_CARD_REQUEST_CANCELLED. */
  order_status?: string;
  /** Expiry date of the card. */
  expiry_date?: string;
  /** The user's name on the card. */
  name_on_card?: string;
  /** The user's preferred name on the card. */
  preferred_name_on_card?: string;
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** The payment account reference number associated with the card. */
  payment_account_reference?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** The monetary account this card was ordered on and the label user that owns the card. */
  label_monetary_account_ordered?: LabelMonetaryAccount;
  /** The monetary account that this card is currently linked to and the label user viewing it. */
  label_monetary_account_current?: LabelMonetaryAccount;
  /** Current monetary account (only for prepaid credit cards). */
  monetary_account?: MonetaryAccount;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The country that is domestic to the card. Defaults to country of residence of user. */
  country?: string;
  /** A tracking link provided by our shipment provider. */
  card_shipment_tracking_url?: string;
  /** Whether this card is eligible for a free replacement. */
  is_card_eligible_for_free_replacement?: boolean;
  /** The card replacement for this card. */
  card_replacement?: CardReplacement;
  /** The generated CVC2 code for this card. */
  card_generated_cvc2?: CardGeneratedCvc2;
  /** Whether this card is a limited edition metal card. */
  is_limited_edition?: boolean;
  /** The date for the member since field on the black metal card. */
  card_metal_member_since_date?: string;
  /** Details of this card belonging to a company, if applicable. */
  company_employee_card?: CompanyEmployeeCard;
}

export interface CardReplace {
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card?: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** The second line on the card. */
  second_line?: string;
}

export interface CardReplaceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardReplacement {
  /** The status of the CardReplacement. */
  status?: string;
  /** The user's main address. */
  address_main?: Address;
  /** The user's postal address. */
  address_postal?: Address;
  /** The original card that belongs to the CardReplacement. */
  card_id?: number;
  /** The new card that replaces the original card in the CardReplacement. */
  card_new_id?: number;
}

export interface CardUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CashbackPayoutItem {
  /** The status of the cashback payout item. */
  status?: string;
  /** The amount of cashback earned. */
  amount?: Amount;
  /** The cashback rate. */
  rate_applied?: string;
  /** The transaction category that this cashback is for. */
  transaction_category?: AdditionalTransactionInformationCategory;
  /** The partner promotion that this cashback is for. */
  user_partner_promotion?: UserPartnerPromotionCashback;
}

export interface Certificate {
  /** A single certificate in the chain in .PEM format. */
  certificate?: string;
}

export interface CertificatePinned {
  /** The certificate chain in .PEM format. */
  certificate_chain: Certificate[];
}

export interface CertificatePinnedCreate {
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export type CertificatePinnedDelete = object;

export interface CertificatePinnedListing {
  /** The certificate chain in .PEM format. Certificates are glued with newline characters. */
  certificate_chain?: string;
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export interface CertificatePinnedRead {
  /** The certificate chain in .PEM format. Certificates are glued with newline characters. */
  certificate_chain?: string;
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export interface CoOwner {
  /** The Alias of the co-owner. */
  alias?: LabelUser;
  /** Can be: ACCEPTED, REJECTED, PENDING or REVOKED */
  status?: string;
}

export interface CoOwnerInviteResponse {
  /** The status of the invite. Can be PENDING, REVOKED (the user deletes the share inquiry before it's accepted) or ACCEPTED */
  status?: string;
  /** The monetary account and user who get the invite for the joint account. */
  alias?: LabelMonetaryAccount;
  /** The monetary account and user who created the joint account. */
  counter_alias?: LabelMonetaryAccount;
  /** The ID of the monetaryAccount */
  monetary_account_id?: number;
  /** The extension type of the monetaryAccount */
  monetary_account_type?: string;
  /** The freeze_status of the invite. */
  freeze_status?: string;
  /** The label of the user that froze the coowner invite (if frozen). */
  label_freeze_user?: LabelUser;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
}

export interface Company {
  /** The company name. */
  name: string;
  /** The company's main address. */
  address_main: Address;
  /** The company's postal address. */
  address_postal: Address;
  /** The country where the company is registered. */
  country: string;
  /** The names and birth dates of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form: string;
  /** The subscription type for the company. */
  subscription_type: string;
  /** The public UUID of the company's avatar. */
  avatar_uuid?: string;
  /** DEPRECATED All the vat numbers of the company */
  vat_number?: CompanyVatNumber;
  /** All the vat numbers of the company */
  vat_numbers?: CompanyVatNumber[];
  /** The type of signup track the user is following. */
  signup_track_type?: string;
}

export interface CompanyCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CompanyEmployeeCard {
  /** The pointer to the employee for which you want to create a card. */
  pointer_counter_user: Pointer;
  /** The pointer to the monetary account that will be connected at first with the card. */
  pointer_monetary_account: Pointer;
  /** The type of card to order. */
  type: string;
  /** The product type of the card to order. */
  product_type: string;
  /** The name of the company that should be displayed on the card. */
  company_name_on_card?: string;
  /** The name of the employee that should be displayed on the card. */
  employee_name_on_card?: string;
  /** The user's preferred name as it will be on the card. */
  employee_preferred_name_on_card?: string;
  /** The monthly spending limit for this employee on the card. */
  amount_limit_monthly?: Amount;
  /** The status of the employee card. */
  status?: string;
  /** The actual card. */
  card?: Card;
  /** The monthly spend for this employee on the card. */
  amount_spent_monthly?: Amount;
  /** The number of transactions that still need a receipt. */
  number_of_company_employee_card_receipt_pending?: number;
}

export interface CompanyEmployeeCardReceipt {
  /** The status of the receipt. */
  status?: string;
}

export interface CompanyEmployeeSettingAdyenCardTransaction {
  /** The pointer to the employee for which you want to create a card. */
  pointer_counter_user: Pointer;
  /** Whether the user is allowed to use Tap to Pay. */
  status?: string;
  /** The ID of the monetary account where Tap to Pay transactions should be paid out to. */
  monetary_account_payout_id?: number;
}

export interface CompanyListing {
  UserCompany?: UserCompany;
}

export interface CompanyRead {
  UserCompany?: UserCompany;
}

export interface CompanyUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CompanyVatNumber {
  /** The VAT identification number type. */
  type?: string;
  /** The country of the VAT identification number. */
  country?: string;
  /** The VAT identification number number. */
  value?: string;
}

export interface ConfirmationOfFunds {
  /** The pointer (IBAN) of the account we're querying. */
  pointer_iban: Pointer;
  /** The amount we want to check for. */
  amount: Amount;
}

export interface ConfirmationOfFundsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyCloudBeneficiary {
  /** The name of the beneficiary. */
  name: string;
  /** The country of the beneficiary. */
  country: string;
  /** The currency of the beneficiary. */
  currency: string;
  /** The payment type this requirement is for. */
  payment_type: string;
  /** The legal entity type of the beneficiary. */
  legal_entity_type: string;
  /** All fields that were required by CurrencyCloud. Obtained through the CurrencyCloudBeneficiaryRequirement listing. */
  all_field: string[];
}

export interface CurrencyCloudBeneficiaryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyCloudBeneficiaryListing {
  /** The id of the profile. */
  id?: number;
  /** The timestamp of the beneficiaries creation. */
  created?: string;
  /** The timestamp of the beneficiaries last update. */
  updated?: string;
  /** The name of the beneficiary. */
  name?: string;
  /** The account number to display for the beneficiary. */
  account_number?: string;
  /** The currency of the beneficiary. */
  currency?: string;
  /** The external identifier of the beneficiary. */
  external_identifier?: string;
}

export interface CurrencyCloudBeneficiaryRead {
  /** The id of the profile. */
  id?: number;
  /** The timestamp of the beneficiaries creation. */
  created?: string;
  /** The timestamp of the beneficiaries last update. */
  updated?: string;
  /** The name of the beneficiary. */
  name?: string;
  /** The account number to display for the beneficiary. */
  account_number?: string;
  /** The currency of the beneficiary. */
  currency?: string;
  /** The external identifier of the beneficiary. */
  external_identifier?: string;
}

export interface CurrencyCloudBeneficiaryRequirementField {
  /** The label to display for the field. */
  label?: string;
  /** The name of the field. */
  name?: string;
  /** The expression to validate field input. */
  validation_expression?: string;
  /** The type of data to input. Determines the keyboard to display. */
  input_type?: string;
}

export interface CurrencyCloudBeneficiaryRequirementListing {
  /** The payment type this requirement is for. */
  payment_type?: string;
  /** The entity type this requirement is for. */
  legal_entity_type?: string;
  /** The fields that are required. */
  all_field?: CurrencyCloudBeneficiaryRequirementField[];
}

export interface CurrencyCloudPaymentQuote {
  /** The points we want to know the fees for. */
  pointers: Pointer[];
}

export interface CurrencyCloudPaymentQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversion {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface CurrencyConversionListing {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface CurrencyConversionQuote {
  /** The amount to convert. */
  amount: Amount;
  /** The currency we are converting. */
  currency_source: string;
  /** The currency we are converting towards. */
  currency_target: string;
  /** The type of the quote, SELL or BUY. */
  order_type: string;
  /** The Alias of the party we are transferring the money to. */
  counterparty_alias: Pointer;
  /** The status of the quote. */
  status?: string;
}

export interface CurrencyConversionQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversionQuoteRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The status of the quote. */
  status?: string;
  /** The amount to convert. */
  amount_source?: Amount;
  /** The amount to convert to. */
  amount_target?: Amount;
  /** The conversion rate. */
  rate?: string;
  /** Timestamp for when this quote expires and the user should request a new one. */
  time_expiry?: string;
}

export interface CurrencyConversionQuoteUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversionRead {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface Customer {
  /** The primary billing account account's id. */
  billing_account_id?: string;
  /** The preferred notification type for invoices. */
  invoice_notification_preference?: string;
  /** The id of the customer. */
  id?: number;
  /** The timestamp of the customer object's creation. */
  created?: string;
  /** The timestamp of the customer object's last update. */
  updated?: string;
}

export interface CustomerLimit {
  /** The limit of monetary accounts. */
  limit_monetary_account?: number;
  /** The amount of additional monetary accounts you can create. */
  limit_monetary_account_remaining?: number;
  /** The limit of Maestro cards. */
  limit_card_debit_maestro?: number;
  /** The limit of MasterCard cards. */
  limit_card_debit_mastercard?: number;
  /** DEPRECTATED: The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_debit_wildcard?: number;
  /** The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_wildcard?: number;
  /** The limit of free replacement cards. */
  limit_card_replacement?: number;
  /** The maximum amount a user is allowed to spend in a month. */
  limit_amount_monthly?: Amount;
  /** The amount the user has spent in the last month. */
  spent_amount_monthly?: Amount;
}

export interface CustomerLimitListing {
  /** The limit of monetary accounts. */
  limit_monetary_account?: number;
  /** The amount of additional monetary accounts you can create. */
  limit_monetary_account_remaining?: number;
  /** The limit of Maestro cards. */
  limit_card_debit_maestro?: number;
  /** The limit of MasterCard cards. */
  limit_card_debit_mastercard?: number;
  /** DEPRECTATED: The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_debit_wildcard?: number;
  /** The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_wildcard?: number;
  /** The limit of free replacement cards. */
  limit_card_replacement?: number;
  /** The maximum amount a user is allowed to spend in a month. */
  limit_amount_monthly?: Amount;
  /** The amount the user has spent in the last month. */
  spent_amount_monthly?: Amount;
}

export interface DeviceListing {
  DeviceServer?: DeviceServer;
}

export interface DeviceRead {
  DeviceServer?: DeviceServer;
}

export interface DeviceServer {
  /** The description of the DeviceServer. This is only for your own reference when reading the DeviceServer again. */
  description: string;
  /** The API key. You can request an API key in the bunq app. */
  secret: string;
  /** An array of IPs (v4 or v6) this DeviceServer will be able to do calls from. These will be linked to the API key. */
  permitted_ips?: string[];
}

export interface DeviceServerCreate {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
}

export interface DeviceServerListing {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
  /** The timestamp of the DeviceServer's creation. */
  created?: string;
  /** The timestamp of the DeviceServer's last update. */
  updated?: string;
  /** The description of the DeviceServer. */
  description?: string;
  /** The ip address which was used to create the DeviceServer. */
  ip?: string;
  /** The status of the DeviceServer. Can be ACTIVE, BLOCKED, NEEDS_CONFIRMATION or OBSOLETE. */
  status?: string;
}

export interface DeviceServerRead {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
  /** The timestamp of the DeviceServer's creation. */
  created?: string;
  /** The timestamp of the DeviceServer's last update. */
  updated?: string;
  /** The description of the DeviceServer. */
  description?: string;
  /** The ip address which was used to create the DeviceServer. */
  ip?: string;
  /** The status of the DeviceServer. Can be ACTIVE, BLOCKED, NEEDS_CONFIRMATION or OBSOLETE. */
  status?: string;
}

export interface DraftPayment {
  /** The status of the DraftPayment. */
  status?: string;
  /** The list of entries in the DraftPayment. Each entry will result in a payment when the DraftPayment is accepted. */
  entries: DraftPaymentEntry[];
  /** The last updated_timestamp that you received for this DraftPayment. This needs to be provided to prevent race conditions. */
  previous_updated_timestamp?: string;
  /** The number of accepts that are required for the draft payment to receive status ACCEPTED. Currently only 1 is valid. */
  number_of_required_accepts: number;
  /** The schedule details when creating or updating a scheduled payment. */
  schedule?: Schedule;
}

export interface DraftPaymentAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface DraftPaymentCreate {
  /** The id of the created DrafPayment. */
  id?: number;
}

export interface DraftPaymentEntry {
  /** The amount of the payment. */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the DraftPayment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the DraftPayment. Maximum 140 characters for DraftPayments to external IBANs, 9000 characters for DraftPayments to only other bunq MonetaryAccounts. */
  description?: string;
  /** Optional data to be included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The Attachments attached to the DraftPayment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** The id of the draft payment entry. */
  id?: number;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the DraftPayment. */
  alias?: LabelMonetaryAccount;
  /** The type of the draft payment entry. */
  type?: string;
}

export interface DraftPaymentListing {
  /** The id of the created DrafPayment. */
  id?: number;
  /** The id of the MonetaryAccount the DraftPayment applies to. */
  monetary_account_id?: number;
  /** The label of the User who created the DraftPayment. */
  user_alias_created?: LabelUser;
  /** All responses to this draft payment. */
  responses?: DraftPaymentResponse[];
  /** The status of the DraftPayment. */
  status?: string;
  /** The type of the DraftPayment. */
  type?: string;
  /** The entries in the DraftPayment. */
  entries?: DraftPaymentEntry[];
  /** The Payment or PaymentBatch. This will only be present after the DraftPayment has been accepted. */
  object?: DraftPaymentAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface DraftPaymentRead {
  /** The id of the created DrafPayment. */
  id?: number;
  /** The id of the MonetaryAccount the DraftPayment applies to. */
  monetary_account_id?: number;
  /** The label of the User who created the DraftPayment. */
  user_alias_created?: LabelUser;
  /** All responses to this draft payment. */
  responses?: DraftPaymentResponse[];
  /** The status of the DraftPayment. */
  status?: string;
  /** The type of the DraftPayment. */
  type?: string;
  /** The entries in the DraftPayment. */
  entries?: DraftPaymentEntry[];
  /** The Payment or PaymentBatch. This will only be present after the DraftPayment has been accepted. */
  object?: DraftPaymentAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface DraftPaymentResponse {
  /** The status with which was responded. */
  status?: string;
  /** The user that responded to the DraftPayment. */
  user_alias_created?: LabelUser;
}

export interface DraftPaymentUpdate {
  /** The id of the created DrafPayment. */
  id?: number;
}

export type Error = {
  /** The error description in English. */
  error_description?: string;
  /** The error description translated to the user's language. */
  error_description_translated?: string;
}[];

export interface Event {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
  /** Fields of the external model which we have stored so we know what they were at the time of the event. */
  object_data_at_event?: EventObject;
  /** Indicator whether this is the latest event for the object. */
  is_event_latest_for_object?: boolean;
  /** Indicator whether this is event can be reassigned to another Monetary Account. */
  is_event_reassignable?: boolean;
}

export interface EventListing {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface EventObject {
  BunqMeTab?: BunqMeTab;
  BunqMeTabResultResponse?: BunqMeTabResultResponse;
  BunqMeFundraiserResult?: BunqMeFundraiserResult;
  Card?: Card;
  CardDebit?: CardDebit;
  DraftPayment?: DraftPayment;
  FeatureAnnouncement?: FeatureAnnouncement;
  IdealMerchantTransaction?: IdealMerchantTransaction;
  Invoice?: Invoice;
  ScheduledPayment?: SchedulePayment;
  ScheduledPaymentBatch?: SchedulePaymentBatch;
  ScheduledInstance?: ScheduleInstance;
  MasterCardAction?: MasterCardAction;
  BankSwitchServiceNetherlandsIncomingPayment?: BankSwitchServiceNetherlandsIncomingPayment;
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
  RequestInquiryBatch?: RequestInquiryBatch;
  RequestInquiry?: RequestInquiry;
  RequestResponse?: RequestResponse;
  ShareInviteBankInquiry?: ShareInviteMonetaryAccountInquiry;
  ShareInviteBankResponse?: ShareInviteMonetaryAccountResponse;
  SofortMerchantTransaction?: SofortMerchantTransaction;
  TransferwisePayment?: TransferwiseTransfer;
}

export interface EventRead {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface ExportAnnualOverview {
  /** The year for which the overview is. */
  year: number;
}

export type ExportAnnualOverviewContentListing = object;

export interface ExportAnnualOverviewCreate {
  /** The id of the annual overview as created on the server. */
  id?: number;
}

export type ExportAnnualOverviewDelete = object;

export interface ExportAnnualOverviewListing {
  /** The id of the annual overview as created on the server. */
  id?: number;
  /** The timestamp of the annual overview 's creation. */
  created?: string;
  /** The timestamp of the annual overview 's last update. */
  updated?: string;
  /** The year for which the overview is. */
  year?: number;
  /** The user to which this annual overview belongs. */
  alias_user?: LabelUser;
}

export interface ExportAnnualOverviewRead {
  /** The id of the annual overview as created on the server. */
  id?: number;
  /** The timestamp of the annual overview 's creation. */
  created?: string;
  /** The timestamp of the annual overview 's last update. */
  updated?: string;
  /** The year for which the overview is. */
  year?: number;
  /** The user to which this annual overview belongs. */
  alias_user?: LabelUser;
}

export type ExportRib = object;

export type ExportRibContentListing = object;

export interface ExportRibCreate {
  /** The id of the rib as created on the server. */
  id?: number;
}

export type ExportRibDelete = object;

export interface ExportRibListing {
  /** The id of the rib as created on the server. */
  id?: number;
  /** The timestamp of the RIB's creation. */
  created?: string;
  /** The timestamp of the RIB's last update. */
  updated?: string;
}

export interface ExportRibRead {
  /** The id of the rib as created on the server. */
  id?: number;
  /** The timestamp of the RIB's creation. */
  created?: string;
  /** The timestamp of the RIB's last update. */
  updated?: string;
}

export interface ExportStatement {
  /** The format type of statement. Allowed values: MT940, CSV, PDF. */
  statement_format: string;
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
  /** Required for CSV exports. The regional format of the statement, can be UK_US (comma-separated) or EUROPEAN (semicolon-separated). */
  regional_format?: string;
  /** Only for PDF exports. Includes attachments to mutations in the export, such as scanned receipts. */
  include_attachment?: boolean;
}

export type ExportStatementCardContentListing = object;

export interface ExportStatementCardCsv {
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
  /** Required for CSV exports. The regional format of the statement, can be UK_US (comma-separated) or EUROPEAN (semicolon-separated). */
  regional_format: string;
}

export interface ExportStatementCardCsvCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementCardCsvDelete = object;

export interface ExportStatementCardCsvListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardCsvRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardPdf {
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
}

export interface ExportStatementCardPdfCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementCardPdfDelete = object;

export interface ExportStatementCardPdfListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardPdfRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export type ExportStatementContentListing = object;

export interface ExportStatementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementDelete = object;

export interface ExportStatementListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** MT940 Statement number. Unique per monetary account. */
  statement_number?: number;
  /** The format of statement. */
  statement_format?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The monetary account for which this statement was created. */
  alias_monetary_account?: LabelMonetaryAccount;
}

export type ExportStatementPayment = object;

export type ExportStatementPaymentContentListing = object;

export interface ExportStatementPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ExportStatementPaymentRead {
  /** The id of the single payment statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The status of the export. */
  status?: string;
}

export interface ExportStatementRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** MT940 Statement number. Unique per monetary account. */
  statement_number?: number;
  /** The format of statement. */
  statement_format?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The monetary account for which this statement was created. */
  alias_monetary_account?: LabelMonetaryAccount;
}

export interface FeatureAnnouncement {
  /** The Avatar of the event overview. */
  avatar?: Avatar;
  /** The event overview title of the feature display */
  title?: string;
  /** The event overview subtitle of the feature display */
  sub_title?: string;
  /** The type of the feature announcement so apps can override with their own stuff if desired */
  type?: string;
}

export interface FeatureAnnouncementRead {
  /** The Avatar of the event overview. */
  avatar?: Avatar;
  /** The event overview title of the feature display */
  title?: string;
  /** The event overview subtitle of the feature display */
  sub_title?: string;
  /** The type of the feature announcement so apps can override with their own stuff if desired */
  type?: string;
}

export interface Fulfillment {
  /** Type of the information fulfillment. */
  type?: string;
  /** The reason why this fulfillment is requested. */
  reason?: string;
  /** The translated reason why this fulfillment is requested. */
  reason_translated?: string;
  /** Status of this fulfillment. */
  status?: string;
  /** Time when the information fulfillment becomes mandatory. */
  time_mandatory?: string;
  /** The user id this fulfillment is required for. */
  user_id?: number;
  /** The allowed statusses for this fulfillment. */
  all_status_allowed?: string[];
}

export interface Geolocation {
  /** The latitude for a geolocation restriction. */
  latitude?: number;
  /** The longitude for a geolocation restriction. */
  longitude?: number;
  /** The altitude for a geolocation restriction. */
  altitude?: number;
  /** The radius for a geolocation restriction. */
  radius?: number;
}

export interface GinmonTransaction {
  /** The status of the transaction. */
  status?: string;
  /** The status of the transaction. */
  status_description?: string;
  /** The translated status of the transaction. */
  status_description_translated?: string;
  /** The final amount the user will pay or receive. */
  amount_billing?: Amount;
  /** The estimated amount the user will pay or receive. */
  amount_billing_original?: Amount;
  /** The ISIN of the security. */
  isin?: string;
  /** External identifier of this order at Ginmon. */
  external_identifier?: string;
  /** The label of the user. */
  label_user?: LabelUser;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The id of the event of transaction. */
  event_id?: number;
}

export interface HealthCheckListing {
  HealthResult?: HealthCheckResult;
}

export interface HealthCheckResult {
  /** The result status of the health check. */
  status?: string;
  /** The entries on which the current status is based. */
  allEntry?: HealthCheckResultEntry[];
}

export interface HealthCheckResultEntry {
  /** The type of HealthCheckResultEntry. */
  type?: string;
  /** The status of the HealthCheckResultEntry */
  status?: string;
}

export interface IdealMerchantTransaction {
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface IdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface IdealMerchantTransactionListing {
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface IdealMerchantTransactionRead {
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface Image {
  /** The public UUID of the public attachment containing the image. */
  attachment_public_uuid?: string;
  /** The content-type as a MIME filetype. */
  content_type?: string;
  /** The image height in pixels. */
  height?: number;
  /** The image width in pixels. */
  width?: number;
}

export interface InsightEventListing {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface InsightListing {
  /** The category. */
  category?: string;
  /** The translated category. */
  category_translated?: string;
  /** The color of the category. */
  category_color?: string;
  /** The icon of the category. */
  category_icon?: string;
  /** The total amount of the transactions in the category. */
  amount_total?: Amount;
  /** The number of the transactions in the category. */
  number_of_transactions?: number;
}

export interface InsightPreferenceDateListing {
  /** The day of month at which budgeting/insights should start. */
  day_of_month?: number;
}

export interface Installation {
  /** Your public key. This is the public part of the key pair that you are going to use to create value of the "X-Bunq-Client-Signature" header for all future API calls. */
  client_public_key: string;
}

export interface InstallationCreate {
  /** The Id object of the created Installation */
  Id?: BunqId;
  /** The Token object of this Installation. */
  Token?: InstallationToken;
  /** The ServerPublicKey object of the created Installation */
  ServerPublicKey?: InstallationServerPublicKey;
}

export interface InstallationListing {
  /** The id of the Installation as created on the server. You can use this id to request the server's public key again. */
  id?: number;
}

export interface InstallationRead {
  /** The id of the Installation as created on the server. You can use this id to request the server's public key again. */
  id?: number;
}

export interface InstallationServerPublicKey {
  /** The server's public key for this Installation. You should use this key to verify the "X-Bunq-Server-Signature" header for each response from the server. */
  server_public_key?: string;
}

export interface InstallationServerPublicKeyListing {
  /** The server's public key for this Installation. */
  server_public_key?: string;
}

export interface InstallationToken {
  /** The id of the Token. */
  id?: number;
  /** The timestamp of the Token's creation. */
  created?: string;
  /** The timestamp of the Token's last update. */
  updated?: string;
  /** The installation token is the token the client has to provide in the "X-Bunq-Client-Authentication" header for the creation of a DeviceServer and SessionServer. */
  token?: string;
}

export interface Invoice {
  /** The invoice status. */
  status?: string;
  /** The description provided by the admin. */
  description: string;
  /** The external url provided by the admin. */
  external_url: string;
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface InvoiceByUserListing {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
}

export interface InvoiceByUserRead {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
}

export type InvoiceExportPdf = object;

export type InvoiceExportPdfContentListing = object;

export interface InvoiceExportPdfCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type InvoiceExportPdfDelete = object;

export interface InvoiceExportPdfRead {
  /** The id of the invoice export model. */
  id?: number;
  /** The timestamp of the invoice export's creation. */
  created?: string;
  /** The timestamp of the invoice export's last update. */
  updated?: string;
  /** The status of the invoice export. */
  status?: string;
}

export interface InvoiceExportPdfUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface InvoiceItem {
  /** The id of the invoice item. */
  id?: number;
  /** The billing date of the item. */
  billing_date?: string;
  /** The price description. */
  type_description?: string;
  /** The translated price description. */
  type_description_translated?: string;
  /** The unit item price excluding VAT. */
  unit_vat_exclusive?: Amount;
  /** The unit item price including VAT. */
  unit_vat_inclusive?: Amount;
  /** The VAT tax fraction. */
  vat?: number;
  /** The number of items priced. */
  quantity?: number;
  /** The item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The item price including VAT. */
  total_vat_inclusive?: Amount;
}

export interface InvoiceItemGroup {
  /** The type of the invoice item group. */
  type?: string;
  /** The description of the type of the invoice item group. */
  type_description?: string;
  /** The translated description of the type of the invoice item group. */
  type_description_translated?: string;
  /** The identifier of the invoice item group. */
  instance_description?: string;
  /** The unit item price excluding VAT. */
  product_vat_exclusive?: Amount;
  /** The unit item price including VAT. */
  product_vat_inclusive?: Amount;
  /** The invoice items in the group. */
  item?: InvoiceItem[];
}

export interface InvoiceListing {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface InvoiceRead {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface Issuer {
  /** The BIC code. */
  bic?: string;
  /** The name of the bank. */
  name?: string;
}

export interface LabelCard {
  /** The public UUID. */
  uuid?: string;
  /** The type of the card. */
  type?: string;
  /** The second line on the card. */
  second_line?: string;
  /** The date this card will expire. */
  expiry_date?: string;
  /** The status of the card. */
  status?: string;
  /** The owner of this card. */
  label_user?: LabelUser;
}

export interface LabelMonetaryAccount {
  /** The IBAN of the monetary account. */
  iban?: string;
  /** The name to display with this monetary account. */
  display_name?: string;
  /** The avatar of the monetary account. */
  avatar?: Avatar;
  /** The user this monetary account belongs to. */
  label_user?: LabelUser;
  /** The country of the user. Formatted as a ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** Bunq.me pointer with type and value. */
  bunq_me?: Pointer;
  /** Whether or not the monetary account is light. */
  is_light?: boolean;
  /** The BIC used for a SWIFT payment. */
  swift_bic?: string;
  /** The account number used for a SWIFT payment. May or may not be an IBAN. */
  swift_account_number?: string;
  /** The account number used for a Transferwise payment. May or may not be an IBAN. */
  transferwise_account_number?: string;
  /** The bank code used for a Transferwise payment. May or may not be a BIC. */
  transferwise_bank_code?: string;
  /** The merchant category code. */
  merchant_category_code?: string;
}

export interface LabelUser {
  /** The public UUID of the label-user. */
  uuid?: string;
  /** The name to be displayed for this user, as it was given on the request. */
  display_name?: string;
  /** The country of the user. 000 stands for "unknown" */
  country?: string;
  /** The current avatar of the user. */
  avatar?: Avatar;
  /** The current nickname of the user. */
  public_nick_name?: string;
}

export interface MasterCardAction {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The cardTokenization event awaiting acceptance by the user */
  card_tokenization_event?: Event;
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The point mutation for this action or null */
  point_mutation?: PointMutation;
  /** DEPRECATED. The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlocklistMasterCardMerchant;
  /** The blocklist enabled for the merchant of this transaction */
  blocklist?: UserBlocklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The MCC provided. */
  merchant_category_code?: string;
  /** The receipt the company employee has to provide for this transaction. */
  company_employee_card_receipt?: CompanyEmployeeCardReceipt;
}

export interface MasterCardActionListing {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The cardTokenization event awaiting acceptance by the user */
  card_tokenization_event?: Event;
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The point mutation for this action or null */
  point_mutation?: PointMutation;
  /** DEPRECATED. The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlocklistMasterCardMerchant;
  /** The blocklist enabled for the merchant of this transaction */
  blocklist?: UserBlocklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The MCC provided. */
  merchant_category_code?: string;
  /** The receipt the company employee has to provide for this transaction. */
  company_employee_card_receipt?: CompanyEmployeeCardReceipt;
}

export interface MasterCardActionRead {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The cardTokenization event awaiting acceptance by the user */
  card_tokenization_event?: Event;
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The point mutation for this action or null */
  point_mutation?: PointMutation;
  /** DEPRECATED. The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlocklistMasterCardMerchant;
  /** The blocklist enabled for the merchant of this transaction */
  blocklist?: UserBlocklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The MCC provided. */
  merchant_category_code?: string;
  /** The receipt the company employee has to provide for this transaction. */
  company_employee_card_receipt?: CompanyEmployeeCardReceipt;
}

export interface MasterCardActionReference {
  /** The id of the event. */
  event_id?: number;
}

export interface MasterCardActionRefund {
  /** Type of this refund. Can de REFUND or CHARGEBACK */
  type?: string;
  /** The sub type of this refund indicating whether the chargeback will be FULL or PARTIAL. */
  sub_type?: string;
  /** The amount to refund. */
  amount?: Amount;
  /** The category of the refund, required for chargeback. */
  category?: string;
  /** The reason of the refund. Can be REFUND_EXPIRED_TRANSACTION, REFUND_REQUESTED, REFUND_MERCHANT, REFUND_CHARGEBACK. */
  reason?: string;
  /** Comment about the refund. */
  comment?: string;
  /** The Attachments to attach to the refund request. */
  attachment?: AttachmentMasterCardActionRefund[];
  /** Proof that the user acknowledged the terms and conditions for chargebacks. */
  terms_and_conditions?: string;
  /** The id of the refund. */
  id?: number;
  /** The timestamp of the refund's creation. */
  created?: string;
  /** The timestamp of the refund's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The status of the refunded mastercard action. Can be AUTO_APPROVED, AUTO_APPROVED_WAITING_FOR_EXPIRY, PENDING_APPROVAL, APPROVED, REFUNDED, DENIED or FAILED */
  status?: string;
  /** The reference to the object this refund applies to. */
  reference_mastercard_action_event?: MasterCardActionReference[];
  /** The id of mastercard action being refunded. */
  mastercard_action_id?: number;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for this transaction to display. */
  description?: string;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The time the refund will take place. */
  time_refund?: string;
  /** All additional information provided by the user. */
  additional_information?: AdditionalInformation;
  /** Description of the refund's current status. */
  status_description?: string;
  /** Description of the refund's current status, translated in user's language. */
  status_description_translated?: string;
  /** Together topic concerning the refund's current status. */
  status_together_url?: string;
}

export interface MasterCardActionReport {
  /** The id of mastercard action being reported. */
  mastercard_action_id?: number;
  /** The id of mastercard action being reported. */
  type?: string;
  /** The id of mastercard action being reported. */
  status?: string;
  /** The reported merchant. */
  merchant_id?: string;
  /** The name of the merchant. */
  merchant_name?: string;
  /** The monetary account label of the merchant. */
  counterparty_alias?: LabelMonetaryAccount;
}

export interface MasterCardIdentityCheckChallengeRequestUser {
  /** The status of the identity check. Can be ACCEPTED_PENDING_RESPONSE or REJECTED_PENDING_RESPONSE. */
  status: string;
}

export interface MasterCardIdentityCheckChallengeRequestUserRead {
  /** The transaction amount. */
  amount?: string;
  /** When the identity check expires. */
  expiry_time?: string;
  /** The description of the purchase. NULL if no description is given. */
  description?: string;
  /** The status of the secure code. Can be PENDING, ACCEPTED, REJECTED, EXPIRED. */
  status?: string;
  /** Textual explanation of the decision. */
  decision_description?: string;
  /** Textual explanation of the decision in user's language. */
  decision_description_translated?: string;
  /** The return url for the merchant app after the challenge is accepted or rejected. */
  url_merchant_app?: string;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The ID of the latest event for the identity check. */
  event_id?: number;
  /** The ID of the card used for the authentication request of the identity check. */
  card_id?: number;
}

export interface MasterCardIdentityCheckChallengeRequestUserUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type MasterCardPaymentListing = object;

export interface MonetaryAccount {
  /** The aliases for the MonetaryAccount. */
  alias?: Pointer[];
  /** The current available balance amount of the MonetaryAccount. */
  balance?: Amount;
  /** The profiles of the account. */
  monetary_account_profile?: MonetaryAccountProfile[];
  /** The settings of the MonetaryAccount. */
  setting?: MonetaryAccountSetting;
  /** The budgets of the MonetaryAccount. */
  budget?: MonetaryAccountBudget[];
  /** The reason for voluntarily cancelling (closing) the MonetaryAccount. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccount. Can be any user provided message. */
  reason_description?: string;
  /** The ShareInviteBankResponse when the MonetaryAccount is accessed by the User via a share/connect. */
  share?: ShareInviteMonetaryAccountResponse;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The fulfillments for this MonetaryAccount. */
  fulfillments?: Fulfillment[];
  /** The RelationUser when the MonetaryAccount is accessed by the User via a share/connect. */
  relation_user?: RelationUser;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The CoOwnerInvite when the MonetaryAccount is accessed by the User via a CoOwnerInvite. */
  co_owner_invite?: CoOwnerInviteResponse;
  /** The open banking account for information about the external account. */
  open_banking_account?: OpenBankingAccount;
  /** The Birdee investment portfolio. */
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio;
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
  MonetaryAccountCard?: MonetaryAccountCard;
}

export interface MonetaryAccountBank {
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountBank. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The country of the monetary account IBAN. */
  country_iban?: string;
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountBankListing {
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankRead {
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountBudget {
  /** DEPRECATED. The list of categories on which the user wants to set the budget. */
  all_category: string[];
  /** DEPRECATED. The amount for the budget. */
  amount: Amount;
  /** DEPRECATED. The recurrence type for the automatic top-up. */
  recurrence_type: string;
  /** DEPRECATED. The monetary account's ID from/to which the missing/exceeding funds will be transferred. */
  monetary_account_source_funding_id: number;
  /** DEPRECATED. The day of the month for the automatic top-up. */
  payment_day_of_month?: number;
}

export interface MonetaryAccountCard {
  /** The id of the MonetaryAccountCard. */
  id?: number;
  /** The timestamp of the MonetaryAccountCard's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountCard's last update. */
  updated?: string;
  /** The currency of the MonetaryAccountCard as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountCard. Defaults to 'prepaid credit card'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountCard. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountCard can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountCard. */
  balance?: Amount;
  /** The current real balance Amount of the MonetaryAccountCard. */
  balance_real?: Amount;
  /** The Aliases for the MonetaryAccountCard. */
  alias?: Pointer[];
  /** The MonetaryAccountCard's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountCard. */
  status?: string;
  /** The sub-status of the MonetaryAccountCard providing extra information regarding the status. */
  sub_status?: string;
  /** The id of the User who owns the MonetaryAccountCard. */
  user_id?: number;
}

export interface MonetaryAccountCardListing {
  /** The id of the MonetaryAccountCard. */
  id?: number;
  /** The timestamp of the MonetaryAccountCard's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountCard's last update. */
  updated?: string;
  /** The currency of the MonetaryAccountCard as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountCard. Defaults to 'prepaid credit card'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountCard. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountCard can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountCard. */
  balance?: Amount;
  /** The current real balance Amount of the MonetaryAccountCard. */
  balance_real?: Amount;
  /** The Aliases for the MonetaryAccountCard. */
  alias?: Pointer[];
  /** The MonetaryAccountCard's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountCard. */
  status?: string;
  /** The sub-status of the MonetaryAccountCard providing extra information regarding the status. */
  sub_status?: string;
  /** The id of the User who owns the MonetaryAccountCard. */
  user_id?: number;
}

export interface MonetaryAccountCardRead {
  /** The id of the MonetaryAccountCard. */
  id?: number;
  /** The timestamp of the MonetaryAccountCard's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountCard's last update. */
  updated?: string;
  /** The currency of the MonetaryAccountCard as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountCard. Defaults to 'prepaid credit card'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountCard. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountCard can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountCard. */
  balance?: Amount;
  /** The current real balance Amount of the MonetaryAccountCard. */
  balance_real?: Amount;
  /** The Aliases for the MonetaryAccountCard. */
  alias?: Pointer[];
  /** The MonetaryAccountCard's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountCard. */
  status?: string;
  /** The sub-status of the MonetaryAccountCard providing extra information regarding the status. */
  sub_status?: string;
  /** The id of the User who owns the MonetaryAccountCard. */
  user_id?: number;
}

export interface MonetaryAccountCardUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternal {
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The external service the Monetary Account is connected with. */
  service?: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountExternal. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The open banking account for information about the external account. */
  open_banking_account?: OpenBankingAccount;
}

export interface MonetaryAccountExternalCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalListing {
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The external service the Monetary Account is connected with. */
  service?: string;
  /** The open banking account for information about the external account. */
  open_banking_account?: OpenBankingAccount;
}

export interface MonetaryAccountExternalRead {
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The external service the Monetary Account is connected with. */
  service?: string;
  /** The open banking account for information about the external account. */
  open_banking_account?: OpenBankingAccount;
}

export interface MonetaryAccountExternalSavings {
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The service the MonetaryAccountExternalSavings is connected with. */
  service: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountExternalSavings. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalSavingsListing {
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsRead {
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountInvestment {
  /** The currency of the MonetaryAccountInvestment as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The provider of the investment service. */
  provider: string;
  /** The description of the MonetaryAccountInvestment. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountInvestment. Defaults to 1000 EUR. Currency must match the MonetaryAccountInvestment's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountInvestment. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountInvestment. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountInvestment providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountInvestment, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountInvestment. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountInvestment. */
  setting?: MonetaryAccountSetting;
  /** The Birdee investment portfolio. */
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio;
  /** ID of the MA to be used for the initial deposit to the investment account. */
  monetary_account_deposit_initial_id?: number;
  /** The amount to be transferred to the investment account as the initial deposit. */
  amount_deposit_initial?: Amount;
  /** The id of the MonetaryAccountInvestment. */
  id?: number;
  /** The timestamp of the MonetaryAccountInvestment's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountInvestment's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountInvestment. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountInvestment. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountInvestment. */
  alias?: Pointer[];
  /** The MonetaryAccountInvestment's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountInvestment. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJoint {
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The UUID of the Avatar of the MonetaryAccountJoint. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountJointListing {
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointRead {
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountLight {
  /** The currency of the MonetaryAccountLight as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountLight. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountLight. Defaults to 1000 EUR. Currency must match the MonetaryAccountLight's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountLight. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountLight. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountLight providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The settings of the MonetaryAccountLight. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountLight. */
  id?: number;
  /** The timestamp of the MonetaryAccountLight's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountLight's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountLight. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountLight. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountLight. */
  alias?: Pointer[];
  /** The MonetaryAccountLight's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountLight. */
  user_id?: number;
  /** The maximum balance Amount of the MonetaryAccountLight. */
  balance_maximum?: Amount;
  /** The amount of the monthly budget used. */
  budget_month_used?: Amount;
  /** The total amount of the monthly budget. */
  budget_month_maximum?: Amount;
  /** The amount of the yearly budget used. */
  budget_year_used?: Amount;
  /** The total amount of the yearly budget. */
  budget_year_maximum?: Amount;
  /** The amount of the yearly withdrawal budget used. */
  budget_withdrawal_year_used?: Amount;
  /** The total amount of the yearly withdrawal budget. */
  budget_withdrawal_year_maximum?: Amount;
}

export interface MonetaryAccountListing {
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
  MonetaryAccountCard?: MonetaryAccountCard;
}

export interface MonetaryAccountProfile {
  /** The profile settings for triggering the fill of a monetary account. */
  profile_fill?: MonetaryAccountProfileFill;
  /** The profile settings for moving excesses to a savings account */
  profile_drain?: MonetaryAccountProfileDrain;
}

export interface MonetaryAccountProfileDrain {
  /** The status of the profile. */
  status?: string;
  /** The goal balance. */
  balance_preferred?: Amount;
  /** The high threshold balance. */
  balance_threshold_high?: Amount;
  /** The savings monetary account. */
  savings_account_alias?: LabelMonetaryAccount;
}

export interface MonetaryAccountProfileFill {
  /** The status of the profile. */
  status?: string;
  /** The goal balance. */
  balance_preferred?: Amount;
  /** The low threshold balance. */
  balance_threshold_low?: Amount;
  /** The bank the fill is supposed to happen from, with BIC and bank name. */
  issuer?: Issuer;
}

export interface MonetaryAccountRead {
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountSwitchService?: MonetaryAccountSwitchService;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
  MonetaryAccountCard?: MonetaryAccountCard;
}

export interface MonetaryAccountSavings {
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountSavings. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountSavingsListing {
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsRead {
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountSetting {
  /** The color chosen for the MonetaryAccount. */
  color?: string;
  /** The icon chosen for the MonetaryAccount. */
  icon?: string;
  /** The status of the avatar. Can be either AVATAR_DEFAULT, AVATAR_CUSTOM or AVATAR_UNDETERMINED. */
  default_avatar_status?: string;
  /** The chat restriction. Possible values are ALLOW_INCOMING or BLOCK_INCOMING */
  restriction_chat?: string;
  /** The preference for this monetary account on whether to automatically accept or reject expiring SDDs. */
  sdd_expiration_action?: string;
}

export interface MonetaryAccountSwitchService {
  /** The id of the monetary account. */
  id?: number;
  /** The timestamp of the monetary account's creation. */
  created?: string;
  /** The description for the bank account. */
  description?: string;
  /** The status of the account. */
  status?: string;
  /** The sub-status of the account. */
  sub_status?: string;
}

export interface NoteAttachmentAdyenCardTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentAdyenCardTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentAdyenCardTransactionDelete = object;

export interface NoteAttachmentAdyenCardTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentAdyenCardTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentAdyenCardTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete =
  object;

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentBunqMeFundraiserResult {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentBunqMeFundraiserResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentBunqMeFundraiserResultDelete = object;

export interface NoteAttachmentBunqMeFundraiserResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBunqMeFundraiserResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBunqMeFundraiserResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentDraftPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentDraftPaymentDelete = object;

export interface NoteAttachmentDraftPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentDraftPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentIdealMerchantTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentIdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentIdealMerchantTransactionDelete = object;

export interface NoteAttachmentIdealMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentIdealMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentIdealMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentMasterCardAction {
  /** Optional description of the attachment. */
  description: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentMasterCardActionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentMasterCardActionDelete = object;

export interface NoteAttachmentMasterCardActionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentMasterCardActionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentMasterCardActionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentOpenBankingMerchantTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentOpenBankingMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentOpenBankingMerchantTransactionDelete = object;

export interface NoteAttachmentOpenBankingMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentOpenBankingMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentOpenBankingMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentPaymentBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentPaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentPaymentBatchDelete = object;

export interface NoteAttachmentPaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentPaymentDelayed {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentPaymentDelayedCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentPaymentDelayedDelete = object;

export interface NoteAttachmentPaymentDelayedListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentDelayedRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentDelayedUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentPaymentDelete = object;

export interface NoteAttachmentPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestInquiry {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestInquiryBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestInquiryBatchDelete = object;

export interface NoteAttachmentRequestInquiryBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestInquiryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestInquiryDelete = object;

export interface NoteAttachmentRequestInquiryListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestResponse {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestResponseCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestResponseDelete = object;

export interface NoteAttachmentRequestResponseListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestResponseRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentScheduleInstance {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentScheduleInstanceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentScheduleInstanceDelete = object;

export interface NoteAttachmentScheduleInstanceListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleInstanceRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSchedulePayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSchedulePaymentBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSchedulePaymentBatchDelete = object;

export interface NoteAttachmentSchedulePaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSchedulePaymentDelete = object;

export interface NoteAttachmentSchedulePaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentScheduleRequest {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentScheduleRequestBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentScheduleRequestBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentScheduleRequestBatchDelete = object;

export interface NoteAttachmentScheduleRequestBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleRequestBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleRequestBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentScheduleRequestCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentScheduleRequestDelete = object;

export interface NoteAttachmentScheduleRequestListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleRequestRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleRequestUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSofortMerchantTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSofortMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSofortMerchantTransactionDelete = object;

export interface NoteAttachmentSofortMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSofortMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSofortMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentWhitelistResult {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentWhitelistResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentWhitelistResultDelete = object;

export interface NoteAttachmentWhitelistResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentWhitelistResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentWhitelistResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextAdyenCardTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextAdyenCardTransactionDelete = object;

export interface NoteTextAdyenCardTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete = object;

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextBunqMeFundraiserResult {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextBunqMeFundraiserResultDelete = object;

export interface NoteTextBunqMeFundraiserResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextDraftPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextDraftPaymentDelete = object;

export interface NoteTextDraftPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextIdealMerchantTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextIdealMerchantTransactionDelete = object;

export interface NoteTextIdealMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextMasterCardAction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextMasterCardActionDelete = object;

export interface NoteTextMasterCardActionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextOpenBankingMerchantTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextOpenBankingMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextOpenBankingMerchantTransactionDelete = object;

export interface NoteTextOpenBankingMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextOpenBankingMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextOpenBankingMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextPaymentBatchDelete = object;

export interface NoteTextPaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextPaymentDelayed {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentDelayedCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextPaymentDelayedDelete = object;

export interface NoteTextPaymentDelayedListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentDelayedRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentDelayedUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextPaymentDelete = object;

export interface NoteTextPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestInquiry {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestInquiryBatchDelete = object;

export interface NoteTextRequestInquiryBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestInquiryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestInquiryDelete = object;

export interface NoteTextRequestInquiryListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestResponse {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestResponseDelete = object;

export interface NoteTextRequestResponseListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextScheduleInstance {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextScheduleInstanceDelete = object;

export interface NoteTextScheduleInstanceListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSchedulePayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSchedulePaymentBatchDelete = object;

export interface NoteTextSchedulePaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSchedulePaymentDelete = object;

export interface NoteTextSchedulePaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextScheduleRequest {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextScheduleRequestBatchDelete = object;

export interface NoteTextScheduleRequestBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextScheduleRequestCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextScheduleRequestDelete = object;

export interface NoteTextScheduleRequestListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleRequestUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSofortMerchantTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSofortMerchantTransactionDelete = object;

export interface NoteTextSofortMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextWhitelistResult {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextWhitelistResultDelete = object;

export interface NoteTextWhitelistResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilter {
  /** The delivery method via which notifications that match this notification filter will be delivered. Possible choices are PUSH for delivery via push notification and URL for delivery via URL callback. */
  notification_delivery_method?: string;
  /** The target of notifications that match this notification filter. For URL notification filters this is the URL to which the callback will be made. For PUSH notifications filters this should always be null. */
  notification_target?: string;
  /** The notification category that will match this notification filter. Possible choices are BILLING, CARD_TRANSACTION_FAILED, CARD_TRANSACTION_SUCCESSFUL, CHAT, DRAFT_PAYMENT, IDEAL, SOFORT, MONETARY_ACCOUNT_PROFILE, MUTATION, PAYMENT, PROMOTION, REQUEST, SCHEDULE_RESULT, SCHEDULE_STATUS, SHARE, SUPPORT, TAB_RESULT, USER_APPROVAL. */
  category?: string;
}

export interface NotificationFilterEmail {
  /** The types of notifications that will result in a email notification for this user. */
  notification_filters?: NotificationFilterEmail[];
}

export interface NotificationFilterEmailCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterEmailListing {
  /** The types of notifications that will result in a email notification for this user. */
  notification_filters?: NotificationFilterEmail[];
}

export interface NotificationFilterFailure {
  /** The IDs to retry. */
  notification_filter_failed_ids: string;
}

export interface NotificationFilterFailureCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterFailureListing {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilter[];
  /** The category of the failed notification. */
  category?: string;
  /** The event type of the failed notification. */
  event_type?: string;
  /** The object id used to generate the body of the notification. */
  object_id?: number;
  /** The exception bunq encountered when processing the callback. */
  exception_message?: string;
  /** The response code (or null) received from the endpoint. */
  response_code?: number;
}

export interface NotificationFilterPush {
  /** The types of notifications that will result in a push notification for this user. */
  notification_filters?: NotificationFilterPush[];
}

export interface NotificationFilterPushCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterPushListing {
  /** The types of notifications that will result in a push notification for this user. */
  notification_filters?: NotificationFilterPush[];
}

export interface NotificationFilterUrl {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterUrlListing {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlMonetaryAccount {
  /** The types of notifications that will result in a url notification for this monetary account. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlMonetaryAccountCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterUrlMonetaryAccountListing {
  /** The types of notifications that will result in a url notification for this monetary account. */
  notification_filters?: NotificationFilterUrl[];
}

export interface OauthCallbackUrl {
  /** The URL for this callback. */
  url: string;
}

export interface OauthCallbackUrlCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type OauthCallbackUrlDelete = object;

export interface OauthCallbackUrlListing {
  /** The URL for this callback. */
  url?: string;
}

export interface OauthCallbackUrlRead {
  /** The URL for this callback. */
  url?: string;
}

export interface OauthCallbackUrlUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface OauthClient {
  /** The status of the Oauth Client, can be ACTIVE or CANCELLED. */
  status?: string;
}

export interface OauthClientCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface OauthClientListing {
  /** Id of the client. */
  id?: number;
  /** The status of the pack group, can be ACTIVE, CANCELLED or CANCELLED_PENDING. */
  status?: string;
  /** The display name of this Oauth Client */
  display_name?: string;
  /** The Client ID associated with this Oauth Client */
  client_id?: string;
  /** Secret associated with this Oauth Client */
  secret?: string;
  /** The callback URLs which are bound to this Oauth Client */
  callback_url?: OauthCallbackUrl[];
}

export interface OauthClientRead {
  /** Id of the client. */
  id?: number;
  /** The status of the pack group, can be ACTIVE, CANCELLED or CANCELLED_PENDING. */
  status?: string;
  /** The display name of this Oauth Client */
  display_name?: string;
  /** The Client ID associated with this Oauth Client */
  client_id?: string;
  /** Secret associated with this Oauth Client */
  secret?: string;
  /** The callback URLs which are bound to this Oauth Client */
  callback_url?: OauthCallbackUrl[];
}

export interface OauthClientUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface OpenBankingAccount {
  /** The status of this account. */
  status?: string;
  /** The iban of this account. */
  iban?: string;
  /** The timestamp of the last time the account was synced with our open banking partner. */
  time_synced_last?: string;
  /** The bank provider the account comes from. */
  provider_bank?: OpenBankingProviderBank;
  /** The booked balance of the account. */
  balance_booked?: Amount;
  /** The available balance of the account, if provided by the other bank. */
  balance_available?: Amount;
}

export interface OpenBankingProviderBank {
  /** Whether we support Open Banking budgeting using the bank provider. */
  account_information_service_status?: string;
  /** Whether we support top ups using the bank provider. */
  payment_information_service_status?: string;
  /** The name of the bank provider. */
  name?: string;
  /** The external identifier for this bank. */
  aiia_provider_id?: string;
  /** Country of provider */
  country?: string;
  /** All payment methods allowed for Sepa payments. */
  all_payment_method_allowed_sepa?: string[];
  /** All payment methods allowed for Domestic payments. */
  all_payment_method_allowed_domestic?: string[];
  /** Whether business banking is supported by the provider. */
  audience_business_status?: boolean;
  /** Whether personal banking is supported by the provider. */
  audience_private_status?: boolean;
  /** The avatar of the bank. */
  avatar?: Avatar;
}

export interface PartnerPromotionCashback {
  /** The public UUID of the cashback promotion. */
  public_uuid?: string;
  /** The status of the cashback promotion. */
  status?: string;
  /** The promotion code used in signup to indicate the partner that referred the user. */
  promotion_code?: string;
  /** The amount of cashback per transaction, will not be higher than the amount of the transaction. */
  amount_cashback_per_transaction_maximum?: Amount;
  /** The maximum number of transactions that can be made. */
  number_of_transaction_maximum?: number;
  /** The minimum amount of a transaction. */
  amount_transaction_minimum?: Amount;
  /** The URL to the Together page with FAQs about this promotion. */
  url_together?: string;
  /** The deeplink to the cashback promotion. */
  deeplink?: string;
  /** The name of the partner. */
  partner_name?: string;
  /** The avatar of the partner. */
  partner_avatar?: Avatar;
  /** The short title of the promotion. */
  promotion_title_short?: string[];
  /** The long title of the promotion. */
  promotion_title_long?: string[];
  /** The description of the promotion. */
  promotion_description?: string[];
}

export interface Payment {
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** Whether or not sending a bunq.to payment is allowed. */
  allow_bunqto?: boolean;
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** Information about the expected arrival of the payment. */
  payment_arrival_expected?: PaymentArrivalExpected;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
  /** A reference to the PaymentSuspendedOutgoing if it exists. */
  payment_suspended_outgoing?: PaymentSuspendedOutgoing;
  /** Incurred fee for the payment. */
  payment_fee?: PaymentFee;
}

export interface PaymentArrivalExpected {
  /** Indicates when we expect the payment to arrive. */
  status?: string;
  /** The time when the payment is expected to arrive. */
  time?: string;
}

export interface PaymentAutoAllocate {
  /** The payment that should be used to define the triggers for the payment auto allocate. */
  payment_id: number;
  /** Whether a payment should be sorted ONCE or RECURRING. */
  type: string;
  /** The definition of how the money should be allocated. */
  definition: PaymentAutoAllocateDefinition[];
}

export interface PaymentAutoAllocateCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentAutoAllocateDefinition {
  /** The type of definition. */
  type: string;
  /** The alias of the party we are allocating the money to. */
  counterparty_alias?: Pointer;
  /** The description for the payment. */
  description?: string;
  /** The amount to allocate. */
  amount?: Amount;
  /** The percentage of the triggering payment's amount to allocate. */
  fraction?: number;
  /** The id of the PaymentAutoAllocateDefinition. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateDefinition was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateDefinition was last updated. */
  updated?: string;
}

export interface PaymentAutoAllocateDefinitionListing {
  /** The id of the PaymentAutoAllocateDefinition. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateDefinition was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateDefinition was last updated. */
  updated?: string;
  /** The alias of the party we are allocating the money to. */
  counterparty_alias?: Pointer;
  /** The description for the payment. */
  description?: string;
  /** The amount to allocate. */
  amount?: Amount;
  /** The percentage of the triggering payment's amount to allocate. */
  fraction?: number;
}

export type PaymentAutoAllocateDelete = object;

export interface PaymentAutoAllocateInstance {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
  /** All Ginmon transaction orders executed with this instance. */
  all_ginmon_transaction_order?: GinmonTransaction[];
}

export interface PaymentAutoAllocateInstanceListing {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
  /** All Ginmon transaction orders executed with this instance. */
  all_ginmon_transaction_order?: GinmonTransaction[];
}

export interface PaymentAutoAllocateInstanceRead {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
  /** All Ginmon transaction orders executed with this instance. */
  all_ginmon_transaction_order?: GinmonTransaction[];
}

export interface PaymentAutoAllocateListing {
  /** The id of the PaymentAutoAllocate. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocate was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocate was last updated. */
  updated?: string;
  /** The type. */
  type?: string;
  /** The status. */
  status?: string;
  /** The amount on which this payment auto allocate will be triggered. */
  trigger_amount?: Amount;
  /** DEPRECATED: superseded by `payment_original` and `payment_latest` */
  payment?: Payment;
  /** The payment that was used to define the triggers for this payment auto allocate. */
  payment_original?: Payment;
  /** The latest payment allocated using this payment auto allocate. */
  payment_latest?: Payment;
}

export interface PaymentAutoAllocateRead {
  /** The id of the PaymentAutoAllocate. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocate was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocate was last updated. */
  updated?: string;
  /** The type. */
  type?: string;
  /** The status. */
  status?: string;
  /** The amount on which this payment auto allocate will be triggered. */
  trigger_amount?: Amount;
  /** DEPRECATED: superseded by `payment_original` and `payment_latest` */
  payment?: Payment;
  /** The payment that was used to define the triggers for this payment auto allocate. */
  payment_original?: Payment;
  /** The latest payment allocated using this payment auto allocate. */
  payment_latest?: Payment;
}

export interface PaymentAutoAllocateUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentAutoAllocateUserListing {
  PaymentAutoAllocate?: PaymentAutoAllocate;
}

export interface PaymentBatch {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchAnchoredPayment {
  Payment?: Payment[];
}

export interface PaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentBatchListing {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchRead {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentCreate {
  /** The id of the created Payment. */
  id?: number;
}

export interface PaymentFee {
  /** The amount formatted to two decimal places. */
  value?: string;
  /** The currency of the amount. It is an ISO 4217 formatted currency code. */
  currency?: string;
  /** The id of the invoice related to possible payment fee. */
  invoice_id?: number;
}

export interface PaymentListing {
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** Information about the expected arrival of the payment. */
  payment_arrival_expected?: PaymentArrivalExpected;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
  /** A reference to the PaymentSuspendedOutgoing if it exists. */
  payment_suspended_outgoing?: PaymentSuspendedOutgoing;
  /** Incurred fee for the payment. */
  payment_fee?: PaymentFee;
}

export interface PaymentRead {
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** Information about the expected arrival of the payment. */
  payment_arrival_expected?: PaymentArrivalExpected;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
  /** A reference to the PaymentSuspendedOutgoing if it exists. */
  payment_suspended_outgoing?: PaymentSuspendedOutgoing;
  /** Incurred fee for the payment. */
  payment_fee?: PaymentFee;
}

export interface PaymentServiceProviderCredential {
  /** Payment Services Directive 2 compatible QSEAL certificate */
  client_payment_service_provider_certificate: string;
  /** Intermediate and root certificate belonging to the provided certificate. */
  client_payment_service_provider_certificate_chain: string;
  /** The Base64 encoded signature of the public key provided during installation and with the installation token appended as a nonce. Signed with the private key belonging to the QSEAL certificate. */
  client_public_key_signature: string;
}

export interface PaymentServiceProviderCredentialCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderCredentialRead {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface PaymentServiceProviderDraftPayment {
  /** The IBAN of the sender. */
  sender_iban: string;
  /** The name of the sender. */
  sender_name?: string;
  /** The IBAN of the counterparty. */
  counterparty_iban: string;
  /** The name of the counterparty. */
  counterparty_name: string;
  /** Description of the payment. */
  description: string;
  /** The Amount to transfer with the Payment. Must be bigger than 0. */
  amount: Amount;
  /** The new status of the Draft Payment. Can only be set to REJECTED or CANCELLED by update. */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderDraftPaymentListing {
  /** The sender IBAN. */
  sender_iban?: string;
  /** The sender IBAN. */
  receiver_iban?: string;
  /** The amount of the draft payment */
  amount?: Amount;
  /** The status of the draft payment */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentRead {
  /** The sender IBAN. */
  sender_iban?: string;
  /** The sender IBAN. */
  receiver_iban?: string;
  /** The amount of the draft payment */
  amount?: Amount;
  /** The status of the draft payment */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderIssuerTransaction {
  /** The counter party this transaction should be sent to. */
  counterparty_alias: Pointer;
  /** The money amount of this transaction */
  amount: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
}

export interface PaymentServiceProviderIssuerTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderIssuerTransactionListing {
  /** The id of this transaction. */
  id?: number;
  /** The time this transaction was created. */
  created?: string;
  /** The time this transaction was last updated. */
  updated?: string;
  /** The public uuid used to identify this transaction. */
  public_uuid?: string;
  /** The counter party this transaction should be sent to. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The money amount of this transaction */
  amount?: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description?: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect?: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
  /** The monetary account this transaction is made from. */
  alias?: LabelMonetaryAccount;
}

export interface PaymentServiceProviderIssuerTransactionRead {
  /** The id of this transaction. */
  id?: number;
  /** The time this transaction was created. */
  created?: string;
  /** The time this transaction was last updated. */
  updated?: string;
  /** The public uuid used to identify this transaction. */
  public_uuid?: string;
  /** The counter party this transaction should be sent to. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The money amount of this transaction */
  amount?: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description?: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect?: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
  /** The monetary account this transaction is made from. */
  alias?: LabelMonetaryAccount;
}

export interface PaymentServiceProviderIssuerTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentSuspendedOutgoing {
  /** The status of the payment. */
  status?: string;
  /** The ID of the monetary account the payment was sent from. */
  monetary_account_id?: string;
  /** The time this payment should be executed. */
  time_execution?: string;
}

export interface PermittedDevice {
  /** The description of the device that may use the credential. */
  description?: string;
  /** The IP address of the device that may use the credential. */
  ip?: string;
}

export interface PermittedIp {
  /** The IP address. */
  ip: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PermittedIpListing {
  /** The IP address. */
  ip?: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpRead {
  /** The IP address. */
  ip?: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PointMutation {
  /** The number of points earned. */
  number_of_point?: number;
}

export interface Pointer {
  /** The alias type, can be: EMAIL|PHONE_NUMBER|IBAN. */
  type?: string;
  /** The alias value. */
  value?: string;
  /** The alias name. */
  name?: string;
  /** The pointer service. Only required for external counterparties. */
  service?: string;
}

export interface RelationUser {
  /** The user's ID. */
  user_id?: string;
  /** The counter user's ID. */
  counter_user_id?: string;
  /** The user's label. */
  label_user?: LabelUser;
  /** The counter user's label. */
  counter_label_user?: LabelUser;
  /** The requested relation type. */
  relationship?: string;
  /** The request's status, only for UPDATE. */
  status?: string;
  /** The account status of a user */
  user_status?: string;
  /** The account status of a user */
  counter_user_status?: string;
  /** Tap to Pay settings for the company employee. */
  company_employee_setting_adyen_card_transaction?: CompanyEmployeeSettingAdyenCardTransaction;
  /** Cards accessible by the company employee */
  all_company_employee_card?: CompanyEmployeeCard[];
}

export interface RequestInquiry {
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The status of the request. */
  status?: string;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** [DEPRECATED] Whether or not the accepting user can give an extra tip on top of the requested Amount. Defaults to false. */
  want_tip?: boolean;
  /** [DEPRECATED] Whether or not the accepting user can choose to accept with a lower amount than requested. Defaults to false. */
  allow_amount_lower?: boolean;
  /** [DEPRECATED] Whether or not the accepting user can choose to accept with a higher amount than requested. Defaults to false. */
  allow_amount_higher?: boolean;
  /** Whether or not sending a bunq.me request is allowed. */
  allow_bunqme: boolean;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The ID of the associated event if the request was made using 'split the bill'. */
  event_id?: number;
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatch {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The status of the request. */
  status?: string;
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The ID of the associated event if the request batch was made using 'split the bill'. */
  event_id?: number;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RequestInquiryBatchListing {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchRead {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RequestInquiryCreate {
  /** The id of the created RequestInquiry. */
  id?: number;
}

export interface RequestInquiryListing {
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryRead {
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryReference {
  /** The type of request inquiry. Can be RequestInquiry or RequestInquiryBatch. */
  type?: string;
  /** The id of the request inquiry (batch). */
  id?: number;
}

export interface RequestInquiryUpdate {
  /** The id of the payment request. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestReferenceSplitTheBillAnchorObject {
  BillingInvoice?: Invoice;
  DraftPayment?: DraftPayment;
  MasterCardAction?: MasterCardAction;
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
  RequestResponse?: RequestResponse;
  ScheduleInstance?: ScheduleInstance;
  WhitelistResult?: WhitelistResult;
  TransferwisePayment?: TransferwiseTransfer;
  CurrencyConversion?: CurrencyConversion;
}

export interface RequestResponse {
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** When the request is accepted on a monetary account with a different currency, a quote is expected to convert. */
  currency_conversion_quote_id?: number;
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** Recommended registration action after IdealIssuerTransaction from iDEAL issuer transaction. */
  registration_action?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseListing {
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** Recommended registration action after IdealIssuerTransaction from iDEAL issuer transaction. */
  registration_action?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseRead {
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** Recommended registration action after IdealIssuerTransaction from iDEAL issuer transaction. */
  registration_action?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SandboxUserCompany = object;

export interface SandboxUserCompanyCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SandboxUserPerson = object;

export interface SandboxUserPersonCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Schedule {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export interface ScheduleAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface ScheduleInstance {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface ScheduleInstanceListing {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceRead {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ScheduleListing {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export interface SchedulePayment {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentBatch {
  /** The payment details. */
  payments?: SchedulePaymentEntry[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface SchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SchedulePaymentBatchDelete = object;

export interface SchedulePaymentBatchRead {
  /** The payment details. */
  payments?: SchedulePaymentEntry[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface SchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface SchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SchedulePaymentDelete = object;

export interface SchedulePaymentEntry {
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** Whether or not sending a bunq.to payment is allowed. */
  allow_bunqto?: boolean;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
}

export interface SchedulePaymentListing {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentRead {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ScheduleRead {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export type ScheduleUserListing = object;

export type ServerError = object;

export interface ServerErrorCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SessionDelete = object;

export interface SessionServer {
  /** The API key of the user you want to login. If your API key has not been used before, it will be bound to the ip address of this DeviceServer. */
  secret: string;
}

export interface SessionServerCreate {
  /** The Id object of the created Session. */
  Id?: BunqId;
  /** The token object of this Session. */
  Token?: SessionServerToken;
  /** The UserCompany object that is logged in with this Session. */
  UserCompany?: UserCompany;
  /** The UserPerson object that is logged in with this Session. */
  UserPerson?: UserPerson;
  /** The UserApiKey object that is logged in with this Session. */
  UserApiKey?: UserApiKey;
  /** The UserPaymentServiceProvider object that is logged in with this Session. */
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface SessionServerToken {
  /** The id of the Token. */
  id?: number;
  /** The Session token is the token the client has to provide in the "X-Bunq-Client-Authentication" header for each API call that requires a Session (only the creation of a Installation and DeviceServer don't require a Session). */
  token?: string;
}

export interface ShareDetail {
  /** The share details for a payment share. In the response 'payment' is replaced by 'ShareDetailPayment'. */
  payment?: ShareDetailPayment;
  /** The share details for viewing a share. In the response 'read_only' is replaced by 'ShareDetailReadOnly'. */
  read_only?: ShareDetailReadOnly;
  /** The share details for a draft payment share. In the response 'draft_payment' is replaced by 'ShareDetailDraftPayment'. */
  draft_payment?: ShareDetailDraftPayment;
}

export interface ShareDetailDraftPayment {
  /** If set to true, the invited user will be able to make draft payments from the shared account. */
  make_draft_payments?: boolean;
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareDetailPayment {
  /** If set to true, the invited user will be able to make payments from the shared account. */
  make_payments?: boolean;
  /** If set to true, the invited user will be able to make draft payments from the shared account. */
  make_draft_payments?: boolean;
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareDetailReadOnly {
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareInviteMonetaryAccountInquiry {
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** Type of access that is in place. */
  access_type?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** DEPRECATED: USE `access_type` INSTEAD | The share details. Only one of these objects may be passed. */
  share_detail?: ShareDetail;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The start date of this share. */
  start_date?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The expiration date of this share. */
  end_date?: string;
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryCreate {
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryListing {
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** Type of access that is in place. */
  access_type?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryRead {
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** Type of access that is in place. */
  access_type?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ShareInviteMonetaryAccountResponse {
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** The card to link to the shared monetary account. Used only if share_detail is ShareDetailCardPayment. */
  card_id?: number;
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseListing {
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseRead {
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface SofortMerchantTransaction {
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface SofortMerchantTransactionListing {
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface SofortMerchantTransactionRead {
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface TaxResident {
  /** The country of the tax number. */
  country?: string;
  /** The tax number. */
  tax_number?: string;
  /** The status of the tax number. Either CONFIRMED or UNCONFIRMED. */
  status?: string;
  /** The id of the tax resident. */
  id?: number;
}

export interface TokenQrRequestIdeal {
  /** The token passed from a site or read from a QR code. */
  token: string;
}

export interface TokenQrRequestIdealCreate {
  /** The id of the RequestResponse. */
  id?: number;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The status of the created RequestResponse. Can only be PENDING. */
  status?: string;
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The type of the RequestResponse. Can be only be IDEAL. */
  type?: string;
  /** The subtype of the RequestResponse. Can be only be NONE. */
  sub_type?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
}

export interface TokenQrRequestSofort {
  /** The token passed from a site or read from a QR code. */
  token: string;
}

export interface TokenQrRequestSofortCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseAccountQuote {
  /** The country of the receiving account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder: string;
  /** The chosen recipient account type. The possible options are provided dynamically in the response endpoint. */
  type: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseAccountQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type TransferwiseAccountQuoteDelete = object;

export interface TransferwiseAccountQuoteListing {
  /** Transferwise's id of the account. */
  account_id?: string;
  /** The currency the account. */
  currency?: string;
  /** The country of the account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder?: string;
  /** The account number. */
  account_number?: string;
  /** The bank code. */
  bank_code?: string;
}

export interface TransferwiseAccountQuoteRead {
  /** Transferwise's id of the account. */
  account_id?: string;
  /** The currency the account. */
  currency?: string;
  /** The country of the account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder?: string;
  /** The account number. */
  account_number?: string;
  /** The bank code. */
  bank_code?: string;
}

export interface TransferwiseAccountRequirement {
  /** The country of the receiving account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder: string;
  /** The chosen recipient account type. The possible options are provided dynamically in the response endpoint. */
  type: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseAccountRequirementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseAccountRequirementListing {
  /** A possible recipient account type. */
  type?: string;
  /** The label of the possible recipient account type to show to the user. */
  label?: string;
  /** The fields which the user needs to fill. */
  fields?: TransferwiseRequirementField[];
}

export interface TransferwiseCurrencyListing {
  /** The currency code. */
  currency?: string;
  /** The currency name. */
  name?: string;
  /** The country code associated with the currency. */
  country?: string;
}

export interface TransferwiseQuote {
  /** The source currency. */
  currency_source: string;
  /** The target currency. */
  currency_target: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. */
  time_expiry?: string;
  /** The quote id Transferwise needs. */
  quote_id?: string;
  /** The fee amount. */
  amount_fee?: Amount;
  /** The rate. */
  rate?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
}

export interface TransferwiseQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseQuoteRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. */
  time_expiry?: string;
  /** The quote id Transferwise needs. */
  quote_id?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The fee amount. */
  amount_fee?: Amount;
  /** The rate. */
  rate?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
}

export interface TransferwiseQuoteTemporary {
  /** The source currency. */
  currency_source: string;
  /** The target currency. */
  currency_target: string;
  /** The source amount. Required if target amount is left empty. */
  amount_source?: Amount;
  /** The target amount. Required if source amount is left empty. */
  amount_target?: Amount;
}

export interface TransferwiseQuoteTemporaryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseQuoteTemporaryRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. Will always be null for temporary quotes. */
  time_expiry?: string;
  /** The quote id Transferwise needs. Will always be null for temporary quotes. */
  quote_id?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate. */
  rate?: string;
}

export interface TransferwiseRequirementField {
  /** The name of the required field. */
  key: string;
  /** The value of the required field. */
  value: string;
  /** The descriptive label of the field. */
  name?: string;
  /** The field group. */
  group?: TransferwiseRequirementFieldGroup;
}

export interface TransferwiseRequirementFieldGroup {
  /** The key of the field. This is the value to send as input. */
  key?: string;
  /** The field's input type: "text", "select" or "radio". */
  type?: string;
  /** The field name. */
  name?: string;
  /** Indicates that any changes in this field affect the requirements, if this field is changed, the requirements endpoint must be called again to recheck if there are any additional requirements. */
  refresh_requirements_on_change?: boolean;
  /** Whether or not the field is required. */
  required?: boolean;
  /** Formatting mask to guide user input. */
  display_format?: string;
  /** An example value for this field. */
  example?: string;
  /** The minimum length of the field's value. */
  min_length?: string;
  /** The maximum length of the field's value. */
  max_length?: string;
  /** A regular expression which may be used to validate the user input. */
  validation_regexp?: string;
  /** Details of an endpoint which may be used to validate the user input. */
  validation_async?: TransferwiseRequirementFieldGroupValidationAsync;
  /** Shows which values are allowed for fields of type "select" or "radio". */
  values_allowed?: TransferwiseRequirementFieldGroupValuesAllowed;
}

export interface TransferwiseRequirementFieldGroupValidationAsync {
  /** The url to be used to validate user input. */
  url?: string;
  /** The parameters to send when validating user input. */
  params?: TransferwiseRequirementFieldGroupValidationAsyncParams;
}

export interface TransferwiseRequirementFieldGroupValidationAsyncParams {
  /** The parameter key. */
  key?: string;
  /** The parameter label. */
  parameter_name?: string;
  /** Shows whether the parameter is required or not. */
  required?: boolean;
}

export interface TransferwiseRequirementFieldGroupValuesAllowed {
  /** The key. */
  key?: string;
  /** The label. */
  name?: string;
}

export interface TransferwiseTransfer {
  /** The id of the monetary account the payment should be made from. */
  monetary_account_id: string;
  /** The id of the target account. */
  recipient_id: string;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseTransferListing {
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferRead {
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferRequirement {
  /** The id of the target account. */
  recipient_id: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseTransferRequirementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseUser {
  /** The OAuth code returned by Transferwise we should be using to gain access to the user's Transferwise account. */
  oauth_code?: string;
}

export interface TransferwiseUserCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseUserListing {
  /** The id of the TransferwiseUser. */
  id?: number;
  /** The timestamp of the TransferwiseUser's creation. */
  created?: string;
  /** The timestamp of the TransferwiseUser's last update. */
  updated?: string;
  /** The name the user is registered with at TransferWise. */
  name?: string;
  /** The email the user is registered with at TransferWise. */
  email?: string;
  /** The source of the user at TransferWise. */
  source?: string;
}

export interface TreeProgressListing {
  /** The number of trees this user and all users have planted. */
  number_of_tree?: number;
  /** The progress towards the next tree. */
  progress_tree_next?: number;
  /** URL of the invite profile. */
  url_invite_profile?: string;
  /** The label of the user the progress belongs to. */
  label_user?: LabelUser;
}

export interface Ubo {
  /** The name of the ultimate beneficiary owner. */
  name?: string;
  /** The date of birth of the ultimate beneficiary owner. */
  date_of_birth?: string;
  /** The nationality of the ultimate beneficiary owner. */
  nationality?: string;
}

export interface UserApiKey {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The user who requested access. */
  requested_by_user?: UserApiKeyAnchoredUser;
  /** The user who granted access. */
  granted_by_user?: UserApiKeyAnchoredUser;
}

export interface UserApiKeyAnchoredUser {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface UserBlocklistMasterCardMerchant {
  /** The name of the merchant. */
  merchant_name?: string;
  /** The blocklisted merchant. */
  merchant_id?: string;
  /** Identifier of the merchant we are blocklisting. */
  merchant_identifier?: string;
  /** The blocklisted merchant. */
  mastercard_merchant_id?: string;
  /** Externally provided merchant identification. */
  external_merchant_id?: string;
  /** The id of the blocklist. */
  id?: number;
  /** The timestamp of the object's creation. */
  created?: string;
  /** The timestamp of the object's last update. */
  updated?: string;
  /** The status of the the blocklist. */
  status?: string;
  /** Hash of the merchant we are blocklisting. */
  merchant_hash?: string;
  merchant_avatar?: Avatar;
}

export interface UserCompany {
  /** The company name. */
  name?: string;
  /** The company's public nick name. */
  public_nick_name?: string;
  /** The public UUID of the company's avatar. */
  avatar_uuid?: string;
  /** The company's main address. */
  address_main?: Address;
  /** The company's postal address. */
  address_postal?: Address;
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The names of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form?: string;
  /** The user status. Can be: ACTIVE, SIGNUP, RECOVERY. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the company in seconds. */
  session_timeout?: number;
  /** The amount the company can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The id of the modified company. */
  id?: number;
  /** The timestamp of the company object's creation. */
  created?: string;
  /** The timestamp of the company object's last update. */
  updated?: string;
  /** The company's public UUID. */
  public_uuid?: string;
  /** The company's display name. */
  display_name?: string;
  /** The aliases of the account. */
  alias?: Pointer[];
  /** The type of business entity. */
  type_of_business_entity?: string;
  /** The sector of industry. */
  sector_of_industry?: string;
  /** The company's other bank account IBAN, through which we verify it. */
  counter_bank_iban?: string;
  /** The company's avatar. */
  avatar?: Avatar;
  /** The company's shipping address. */
  address_shipping?: Address;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The existing bunq aliases for the company's directors. */
  directors?: LabelUser[];
  /** The types of notifications that will result in a push notification or URL callback for this UserCompany. */
  notification_filters?: NotificationFilter[];
  /** The customer profile of the company. */
  customer?: Customer;
  /** The customer limits of the company. */
  customer_limit?: CustomerLimit;
  /** The subscription of the company. */
  billing_contract?: BillingContractSubscription[];
  /** The user deny reason. */
  deny_reason?: string;
  /** The relations for this user. */
  relations?: RelationUser[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
}

export interface UserCompanyNameListing {
  /** All known (trade) names for a user company. */
  name_array?: string[];
}

export interface UserCompanyRead {
  /** The id of the modified company. */
  id?: number;
  /** The timestamp of the company object's creation. */
  created?: string;
  /** The timestamp of the company object's last update. */
  updated?: string;
  /** The company's public UUID. */
  public_uuid?: string;
  /** The company name. */
  name?: string;
  /** The company's display name. */
  display_name?: string;
  /** The company's public nick name. */
  public_nick_name?: string;
  /** The aliases of the account. */
  alias?: Pointer[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form?: string;
  /** The type of business entity. */
  type_of_business_entity?: string;
  /** The sector of industry. */
  sector_of_industry?: string;
  /** The company's other bank account IBAN, through which we verify it. */
  counter_bank_iban?: string;
  /** The company's avatar. */
  avatar?: Avatar;
  /** The company's main address. */
  address_main?: Address;
  /** The company's postal address. */
  address_postal?: Address;
  /** The company's shipping address. */
  address_shipping?: Address;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The existing bunq aliases for the company's directors. */
  directors?: LabelUser[];
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The names of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The user status. Can be: ACTIVE, SIGNUP, RECOVERY. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the company in seconds. */
  session_timeout?: number;
  /** The amount the company can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The types of notifications that will result in a push notification or URL callback for this UserCompany. */
  notification_filters?: NotificationFilter[];
  /** The customer profile of the company. */
  customer?: Customer;
  /** The customer limits of the company. */
  customer_limit?: CustomerLimit;
  /** The subscription of the company. */
  billing_contract?: BillingContractSubscription[];
  /** The user deny reason. */
  deny_reason?: string;
  /** The relations for this user. */
  relations?: RelationUser[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
}

export interface UserCompanyUpdate {
  /** The id of the modified company. */
  id?: number;
}

export interface UserCredentialPasswordIpListing {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface UserCredentialPasswordIpRead {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface UserLegalNameListing {
  /** All legal names that can be used by the user */
  legal_names?: string[];
}

export interface UserListing {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserApiKey?: UserApiKey;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface UserPartnerPromotionCashback {
  /** The promotion code used in signup to indicate the partner that referred the user. */
  promotion_code: string;
  /** The status of the user partner promotion. */
  status?: string;
  /** The number of transactions that are still eligible for this promotion. */
  number_of_transaction_remaining?: number;
  /** The promotion that the user signed up with. */
  partner_promotion?: PartnerPromotionCashback;
}

export interface UserPaymentServiceProvider {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The distinguished name from the certificate used to identify this user. */
  certificate_distinguished_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's avatar. */
  avatar?: Avatar;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED or DENIED. */
  status?: string;
  /** The user sub-status. Can be: NONE */
  sub_status?: string;
  /** The providers's public UUID. */
  public_uuid?: string;
  /** The display name for the provider. */
  display_name?: string;
  /** The public nick name for the provider. */
  public_nick_name?: string;
  /** The provider's language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  language?: string;
  /** The provider's region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  region?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
}

export interface UserPaymentServiceProviderRead {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The distinguished name from the certificate used to identify this user. */
  certificate_distinguished_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's avatar. */
  avatar?: Avatar;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED or DENIED. */
  status?: string;
  /** The user sub-status. Can be: NONE */
  sub_status?: string;
  /** The providers's public UUID. */
  public_uuid?: string;
  /** The display name for the provider. */
  display_name?: string;
  /** The public nick name for the provider. */
  public_nick_name?: string;
  /** The provider's language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  language?: string;
  /** The provider's region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  region?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
}

export interface UserPerson {
  /** The subscription type the user should start on. */
  subscription_type?: string;
  /** The person's first name. */
  first_name?: string;
  /** The person's middle name. */
  middle_name?: string;
  /** The person's last name. */
  last_name?: string;
  /** The public nick name for the person. */
  public_nick_name?: string;
  /** The person's main address. */
  address_main?: Address;
  /** The person's postal address. */
  address_postal?: Address;
  /** The public UUID of the user's avatar. */
  avatar_uuid?: string;
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
  /** The type of identification document the person registered with. */
  document_type?: string;
  /** The identification document number the person registered with. */
  document_number?: string;
  /** The country which issued the identification document the person registered with. */
  document_country_of_issuance?: string;
  /** The reference to the uploaded picture/scan of the front side of the identification document. */
  document_front_attachment_id?: number;
  /** The reference to the uploaded picture/scan of the back side of the identification document. */
  document_back_attachment_id?: number;
  /** The person's date of birth. Accepts ISO8601 date formats. */
  date_of_birth?: string;
  /** The person's nationality. Formatted as a SO 3166-1 alpha-2 country code. */
  nationality?: string;
  /** All of the person's nationalities. */
  all_nationality?: string[];
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The person's gender. Can be MALE, FEMALE or UNKNOWN. */
  gender?: string;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED, SIGNUP, RECOVERY, DENIED or ABORTED. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The legal guardian of the user. Required for minors. */
  legal_guardian_alias?: Pointer;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
  /** The amount the user can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The display name for the person. */
  display_name?: string;
  /** The type of signup track the user is following. */
  signup_track_type?: string;
  /** The id of the modified person object. */
  id?: number;
  /** The timestamp of the person object's creation. */
  created?: string;
  /** The timestamp of the person object's last update. */
  updated?: string;
  /** The person's public UUID. */
  public_uuid?: string;
  /** The person's legal name. */
  legal_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The person's shipping address. */
  address_shipping?: Address;
  /** The person's place of birth. */
  place_of_birth?: string;
  /** The person's country of birth. Formatted as a SO 3166-1 alpha-2 country code. */
  country_of_birth?: string;
  /** The user's avatar. */
  avatar?: Avatar;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The types of notifications that will result in a push notification or URL callback for this UserPerson. */
  notification_filters?: NotificationFilter[];
  /** The relations for this user. */
  relations?: RelationUser[];
}

export interface UserPersonRead {
  /** The id of the modified person object. */
  id?: number;
  /** The timestamp of the person object's creation. */
  created?: string;
  /** The timestamp of the person object's last update. */
  updated?: string;
  /** The person's public UUID. */
  public_uuid?: string;
  /** The person's first name. */
  first_name?: string;
  /** The person's middle name. */
  middle_name?: string;
  /** The person's last name. */
  last_name?: string;
  /** The person's legal name. */
  legal_name?: string;
  /** The display name for the person. */
  display_name?: string;
  /** The public nick name for the person. */
  public_nick_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
  /** The person's main address. */
  address_main?: Address;
  /** The person's postal address. */
  address_postal?: Address;
  /** The person's shipping address. */
  address_shipping?: Address;
  /** The person's date of birth. Accepts ISO8601 date formats. */
  date_of_birth?: string;
  /** The person's place of birth. */
  place_of_birth?: string;
  /** The person's country of birth. Formatted as a SO 3166-1 alpha-2 country code. */
  country_of_birth?: string;
  /** The person's nationality. Formatted as a SO 3166-1 alpha-2 country code. */
  nationality?: string;
  /** All of the person's nationalities. */
  all_nationality?: string[];
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The person's gender. Can be MALE, FEMALE or UNKNOWN. */
  gender?: string;
  /** The user's avatar. */
  avatar?: Avatar;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED, SIGNUP, RECOVERY, DENIED or ABORTED. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
  /** The amount the user can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The types of notifications that will result in a push notification or URL callback for this UserPerson. */
  notification_filters?: NotificationFilter[];
  /** The relations for this user. */
  relations?: RelationUser[];
}

export interface UserPersonUpdate {
  /** The id of the modified person object. */
  id?: number;
}

export interface UserRead {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserApiKey?: UserApiKey;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export type Whitelist = object;

export interface WhitelistResult {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The status of the WhitelistResult. */
  status?: string;
  /** The subStatus of the WhitelistResult. */
  sub_status?: string;
  /** The message when the whitelist result has failed due to user error. */
  error_message?: Error[];
  /** The corresponding whitelist. */
  whitelist?: Whitelist;
  /** The details of the external object the event was created for. */
  object?: WhitelistResultViewAnchoredObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface WhitelistResultViewAnchoredObject {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The RequestResponse object */
  requestResponse?: RequestResponse;
  /** The DraftPayment object */
  draftPayment?: DraftPayment;
}

export interface WhitelistSddListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddMonetaryAccountPayingListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddMonetaryAccountPayingRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddOneOff {
  /** ID of the monetary account of which you want to pay from. */
  monetary_account_paying_id: number;
  /** ID of the request for which you want to whitelist the originating SDD. */
  request_id: number;
  /** The maximum amount of money that is allowed to be deducted per month based on the whitelist. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount of money that is allowed to be deducted per payment based on the whitelist. */
  maximum_amount_per_payment?: Amount;
  /** The type of routing for this whitelist. Should be changed to non-optional CIT/technical#12806. */
  routing_type?: string;
}

export interface WhitelistSddOneOffCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type WhitelistSddOneOffDelete = object;

export interface WhitelistSddOneOffListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
  /** The type of routing for this whitelist. */
  routing_type?: string;
}

export interface WhitelistSddOneOffRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
  /** The type of routing for this whitelist. */
  routing_type?: string;
}

export interface WhitelistSddOneOffUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface WhitelistSddRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddRecurring {
  /** ID of the monetary account of which you want to pay from. */
  monetary_account_paying_id: number;
  /** ID of the request for which you want to whitelist the originating SDD. */
  request_id: number;
  /** The maximum amount of money that is allowed to be deducted per month based on the whitelist. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount of money that is allowed to be deducted per payment based on the whitelist. */
  maximum_amount_per_payment?: Amount;
  /** The type of routing for this whitelist. Should be changed to non-optional CIT/technical#12806. */
  routing_type?: string;
}

export interface WhitelistSddRecurringCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type WhitelistSddRecurringDelete = object;

export interface WhitelistSddRecurringListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
  /** The type of routing for this whitelist. */
  routing_type?: string;
}

export interface WhitelistSddRecurringRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
  /** The type of routing for this whitelist. */
  routing_type?: string;
}

export interface WhitelistSddRecurringUpdate {
  /** The id of the created item */
  Id?: BunqId;
}
