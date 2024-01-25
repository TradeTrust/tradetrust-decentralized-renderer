import { v3 } from "@tradetrust-tt/tradetrust";
import { CoveringLetterSchemaV3 } from "./types";

export const CoveringLetterSampleV3: CoveringLetterSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/cover-letter/1.0/cover-letter-context.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  credentialSubject: {
    title: "Documents Bundle",
    remarks: "Some very important documents in here for some submission. And it supports multiline!",
    titleColor: "rgb(204, 119, 17)",
    remarksColor: "rgb(85, 170, 153)",
    logo: "data:image/png;base64,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",
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "COVERING_LETTER",
      url: "https://generic-templates.tradetrust.io",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      value: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
      revocation: { type: v3.RevocationType.None },
    },
    identityProof: {
      type: v3.IdentityProofType.DNSTxt,
      identifier: "example.tradetrust.io",
    },
  },
  issuer: {
    id: "https://example.com",
    name: "DEMO DOCUMENT STORE",
  },
};