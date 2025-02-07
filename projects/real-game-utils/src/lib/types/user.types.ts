export interface User {
  userAccountId: number;
  firstName: string;
  userName: string;
  token: string;
  sessionId: string;
  avatarUrl: string;
  avatar?: string;
  schoolId: number;
  gradeId: number;
  id: number;
  gender: string;
  schoolInfo: {
    schoolName: string;
    regionName: string;
    state: string;
    schoolCountryType: string;
  };
  isDemo: boolean;
}
