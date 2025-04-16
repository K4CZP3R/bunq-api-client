import { createSign, generateKeyPair } from 'node:crypto';

export type SHA256SignDataToB64Function = (
  data: string,
  key: string,
) => Promise<string>;

// export async function signData(data: string, key: string) {
//   const sign = createSign("sha256");
//   sign.update(data);
//   return sign.sign(key, "base64");
// }

export type GenerateRSA2048KeyPairFunction = () => Promise<{
  publicKey: string;
  privateKey: string;
}>;

// export async function getKeyPair(): Promise<{
//   publicKey: string;
//   privateKey: string;
// }> {
//   return new Promise((resolve, reject) => {
//     generateKeyPair(
//       "rsa",
//       {
//         modulusLength: 2048,
//         publicKeyEncoding: {
//           type: "spki",
//           format: "pem",
//         },
//         privateKeyEncoding: {
//           type: "pkcs8",
//           format: "pem",
//         },
//       },
//       (err, publicKey, privateKey) => {
//         if (err) {
//           reject(err);
//         }

//         resolve({ publicKey, privateKey });
//       }
//     );
//   });
// }
