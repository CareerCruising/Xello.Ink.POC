export interface FamilyMemberTypeCount {
  familyMemberTypeId: number;
  count: number;
}
export interface Play {
  plays: PlayData[];
  totalRecordCount: number;
}
export interface PlayData {
  playId: number;
  portfolioId: number;
  postalCode: string;
  careerId?: number;
  locationId: number;
  selectedLocationName: string;
  familyPlayerName?: string;
  lastExpenseCategoryId: number | null;
  studentLoanRate?: number;
  employeeId?: string;
  familyMemberTypeCount: FamilyMemberTypeCount[];
  educationCredentialId?: number;
  educationCustomCredentialPathwayId?: number;
  income: number;
  familyIncome: number;
  expenseTotal: number;
  lastAccessedUTC: string;
  createdDateUTC: string;
  gameStatus: number;
  gameName: string | null;
  isAssigned: boolean;
  educatorFirstName: string | null;
  educatorLastName: string | null;
}
