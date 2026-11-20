import type { Credential, Partner } from "./types";

/**
 * Candidate OEM / manufacturer names from company materials.
 * Shown as text only until relationship type and logo rights are confirmed.
 */
export const partners: Partner[] = [
  {
    id: "partner-elsewedy",
    name: "Elsewedy Electric",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-schneider",
    name: "Schneider Electric",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-eaton",
    name: "Eaton",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-siemens",
    name: "Siemens",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-legrand",
    name: "Legrand",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Referenced on current website for cable trays — confirm current status.",
  },
  {
    id: "partner-raychem",
    name: "Raychem",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-philips",
    name: "Philips",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-innomotics",
    name: "Innomotics",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-assa",
    name: "ASSA ABLOY",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-eland",
    name: "Eland Cables",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-mct",
    name: "MCT Brattberg",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Candidate manufacturer reference — confirm relationship category.",
  },
  {
    id: "partner-cmp",
    name: "CMP Products",
    relationshipType: "unverified",
    publicationState: "pending-review",
    note: "Referenced on current website for cable glands/cleats — confirm status.",
  },
];

export const credentials: Credential[] = [
  {
    id: "cred-iso9001",
    name: "ISO 9001:2015",
    publicationState: "pending-review",
    note: "Candidate company credential — verify validity, scope and issuer.",
  },
  {
    id: "cred-iso45001",
    name: "ISO 45001:2018",
    publicationState: "pending-review",
    note: "Candidate company credential — verify validity, scope and issuer.",
  },
  {
    id: "cred-coren",
    name: "COREN",
    publicationState: "pending-review",
    note: "Candidate credential — distinguish company registration from individual licences.",
  },
  {
    id: "cred-ncd",
    name: "Nigerian Content credentials",
    publicationState: "pending-review",
    note: "Candidate credential — verify current documentation before publication.",
  },
];
