export type TranslationKey = string | string[];

export type TranslationResult = string | { [key: string]: string };

export interface TranslationLanguageModel {
  translationLanguageId: number;
  name: string;
  languageCode: string;
  languageName: string;
  languageNameLocal: string;
  countryName: string;
}

export interface AuthenticatedUser {
    agreement: boolean;
    avatarFileName: string;
    avatarUrl: string;
    bitMask: number;
    cc2StudentPortfolioId: number;
    contact: ContactModel;
    coursePlannerInfo: StudentCoursePlannerModel;
    coverFileName: string;
    coverUrl: string;
    defaultLanguageId: number;
    firstName: string;
    gender: string;
    grade: string;
    gradeId: number;
    gradeNumber: number;
    hasAccessToCollegeApplication: boolean;
    // Transcripts
    hasAccessToTranscripts: boolean;
    hasAccessToCollegeSuccess: boolean;
    // Inspire
    hasAccessToInspire: boolean;
    hasAccessToHuddles: boolean;
    id: number; // this is the portfolioId
    integrationDistrictId: number;
    isDemo: boolean;
    isDemoInstitution: boolean;
    isPersonalEmailPrimary: boolean;
    skillsLabEnabled: boolean;
    language: TranslationLanguageModel;
    languages: Array<TranslationLanguageModel>;
    lastName2: string;
    lastName: string;
    name: string;
    personalDescription: string;
    personalEmail: string;
    personalEmailVerified: boolean;
    schoolEmail: string;
    schoolId: number;
    schoolInfo: SchoolInfoModel;
    sessionId: string;
    token: string;
    userAccountId: number;
    userName: string;
    userRoleTitle: string;
    dateofBirth: string;
    culture: string;
    emailModalDismissed: boolean;
    showCP: boolean;
    showCPLink: boolean;
    showCCMR: boolean;
    isUkCapVisible: boolean;
    isCommunitiesInstitutionSettingEnabled: boolean;
}

export interface AddressModel {
    street: string;
    city: string;
    stateProv: string;
    zip: string;
}

export interface ContactModel {
    address: AddressModel;
    mobileNumber: string;
}

export interface SchoolInfoModel {
    clusterType: string;
    clusterTypeId: number;
    conSysId: number;
    conSysName: string;
    defaultLanguageId: number;
    hasMethodize: boolean;
    portType: string;
    portTypeId: number;
    regionId: number;
    regionName: string;
    schoolCountryType: string;
    schoolName: string;
    state: string;
    stateFull: string;
    stateId: number;
    isVirtual: boolean;
    zipCode: string;
}

export interface StudentCoursePlannerModel {
    id: number;
    gradeId: number;
    schoolId: number;
    diplomaId: number;
    passingMark: number;
    preRegSchoolId: number;
    userId: number;
    isAvailable: boolean;
    studentStatusId: string;
    isLaunched: boolean;
}
