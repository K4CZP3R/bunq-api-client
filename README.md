# bunq-api-client

 A TypeScript and JavaScript client for the bunq API.

 This library was created to simplify the authentication flow in the official bunq SDKs and to abstract away the complexity of signature creation. It provides a streamlined, developer-friendly interface for working with the bunq API.

 > **⚠️ Warning:** This code has not been audited and was created as a personal proof of concept while experimenting with the bunq API. It is not recommended for production use.

 ## Installation

 Install with npm, Yarn or pnpm:

 ```bash
 npm install bunq-api-client
 # or
 yarn add bunq-api-client
 # or
 pnpm add bunq-api-client
 ```

 ## Prerequisites

 - Node.js 18+
 - A bunq API key (obtain from your bunq developer dashboard)

 ## Usage

 ```ts
 import { BunqPublic, Bunq } from 'bunq-api-client';
 import { createSign, generateKeyPair } from 'node:crypto';
 import type { SHA256SignDataToB64Function, GenerateRSA2048KeyPairFunction } from 'bunq-api-client';

 // 1. Implement crypto helper functions
 const signData: SHA256SignDataToB64Function = async (data, key) => {
   const sign = createSign('sha256');
   sign.update(data);
   return sign.sign(key, 'base64');
 };

 const generateRSA2048KeyPair: GenerateRSA2048KeyPairFunction = () => {
   return new Promise((resolve, reject) => {
     generateKeyPair('rsa', {
       modulusLength: 2048,
       publicKeyEncoding: { type: 'spki', format: 'pem' },
       privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
     }, (err, publicKey, privateKey) => {
       if (err) reject(err);
       else resolve({ publicKey, privateKey });
     });
   });
 };

 async function main() {
   // 2. Generate a new RSA key pair
   const { publicKey, privateKey } = await generateRSA2048KeyPair();

   // 3. Create an installation (SANDBOX or PRODUCTION)
   const bunqPublic = new BunqPublic({ signData, generateRSA2048KeyPair }, 'SANDBOX');
   const installRes = await bunqPublic.createInstallation(publicKey);
   if (installRes.isErr()) throw installRes.error;
   const installationToken = installRes.value.Token.token!;

   // 4. Register your device
   const deviceRes = await bunqPublic.createDevice(
     installationToken,
     privateKey,
     installationToken,
     'My bunq Client'
   );
   if (deviceRes.isErr()) throw deviceRes.error;
   const deviceToken = deviceRes.value.Token.token!;

   // 5. Instantiate the Bunq client
   const bunq = new Bunq(
     'YOUR_API_KEY',
     { clientPrivateKey: privateKey, installationToken },
     { signData, generateRSA2048KeyPair },
     { useSandbox: true, sessionToken: deviceToken }
   );

   // 6. Make API calls (returns neverthrow Result types)
   const usersRes = await bunq.getUsers();
   if (usersRes.isErr()) {
     console.error('Error fetching users:', usersRes.error);
   } else {
     console.log('Users:', usersRes.value);
   }

   const accountsRes = await bunq.getMonetaryAccounts();
   console.log('Accounts:', accountsRes.unwrap());
 }

 main().catch(console.error);
 ```

 ## API Methods

 Use the `bunq` instance to call available API methods:

 - `bunq.getUsers()` &mdash; List all users.
 - `bunq.getUser()` &mdash; Get a single user.
 - `bunq.getMonetaryAccounts()` &mdash; List monetary accounts.
 - `bunq.getMonetaryAccount(id)` &mdash; Get details for a specific monetary account.
 - `bunq.getPayments({ monetaryAccountId, count })` &mdash; List payments.
 - `bunq.bunqmeTabRequest({ monetaryAccountId, value, description, redirectUrl })` &mdash; Create a bunq.me tab.
 - `bunq.getBunqMeTab({ monetaryAccountId, bunqMeTabId })` &mdash; Read a bunq.me tab.
 - And more &mdash; see source code for all available methods.

 ## Configuration Options

 The `Bunq` constructor accepts an optional config object:

 - `useSandbox` (boolean): Use bunq sandbox environment (default: `false`).
 - `sessionToken` (string): Provide an existing session token to skip re-authentication.
 - `baseUrlOverride` (string): Override the bunq API base URL.
 - `storage` (object): A custom storage implementing `{ get(key): Promise<string | undefined>, set(key, value): Promise<void>, delete(key): Promise<void> }` to persist session state.