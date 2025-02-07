import { CredentialObject, PathwayObject, School } from './education.types';

export type RawEducationData = {
  educationId: number;
  playId: number;
  pathwayId: number;
  credentialId: number;
  customCredentialId: number;
  educationSchoolId: number | null;
  loanPaymentPerMonth: number;
  isSelected: boolean;
};

export type RawCredentialData = {
  customCredentialId: number;
  playId: number;
  pathwayId: number;
  title: string;
  duration: string;
  cost: number;
  debt: number;
};

export type EducationRequestBody = {
  credentialId: number | null;
  customCredentialId: number | null;
  educationSchoolId: number | null;
  loanPaymentPerMonth: number;
};

export type EducationListItem = RawEducationData & {
  image: string;
  schoolAddress: string;
  school: School | undefined;
  incomePercent: number;
  credential: CredentialObject | undefined;
  customCredential: RawCredentialData | undefined;
  pathway: PathwayObject | undefined;
  raw: RawEducationData;
};

export type CustomCredentialRequestBody = {
  pathwayId: number;
  title: string;
  duration: string;
  cost: number;
};

export enum EducationTagIDs {
  MOST_AFFORDABLE = 1,
}
