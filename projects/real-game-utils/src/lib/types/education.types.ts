import { CareerCredentials } from './career.types';

export type CareerEducation = {
  id: number;
  title: string;
  duration?: string;
  durationNumber?: number;
  description?: string;
  text?: string[];
  heapId?: string;
  tag?: {
    id: number;
    text: string;
    color: string;
  };
  image: string;
  bulletPoints?: {
    icon: string;
    text: string;
  }[];
  data?: {
    id: number;
    illustration: string;
    data: any;
    subtitle: string;
  }[];
};

export enum CardEducationType {
  PATHWAY = 'pathway',
  CREDENTIAL = 'credential',
}

export enum CredentialDataType {
  TIME = 'time',
  COST = 'cost',
}

export type School = {
  id: number;
  schoolName: string;
  city: string;
  stateProv: string;
  mainSchoolImage: string;
  mapSchoolImage: string;
  cost: number;
  medianGraduationDebt: number;
  image: string;
  displayData?: {
    illustration: string;
    data: string;
    subtitle: string;
  }[];
};

export type PathwayObject = {
  id: number;
  image: string;
  title: string;
  description: string;
  heapId: string;
  wistiaVideos: { id: string; text: string }[];
  bulletPoints: {
    icon: string;
    text: string;
  }[];
};

export type CredentialObjectRaw = {
  id: number;
  title: string;
  text: string[];
  image: string;
  duration: string;
  durationSubtitle?: string;
  durationNumber?: number;
  costSubtitle?: string;
  cost: number;
  pathwayId: number;
};

export type CredentialObject = CareerCredentials & CredentialObjectRaw;
