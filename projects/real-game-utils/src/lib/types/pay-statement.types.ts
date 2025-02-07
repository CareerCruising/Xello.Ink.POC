export type PayStatementDeduction = {
  playId: number;
  payStatementId: number;
  deductionTypeId: number;
  amount: number;
};

export type PayStatement = {
  payStatementId: number;
  playId: number;
  statementNumber: string;
  payMonth: string;
  careerId: number;
  grossPay: number;
  federalTax: number;
  stateProvTax: number;
  countryId: number;
  deductions: PayStatementDeduction[];
  overtime?: number;
};

export type PayStatementCompanyInfo = {
  name?: string;
  address?: string;
};

export type PayStatementEmployeeInfo = {
  firstName?: string;
  id?: string;
  role?: string;
};

export type RowEarningDeduction = {
  rightText: string;
  leftText: string;
  highlighted?: boolean;
  tooltip?: string;
};
