export type StandardExpense = {
  expenseOptionId: number;
  expenseCategoryId: number;
  description: string;
  title: string;
  cost: number;
  isSelected: boolean;
  isPercent?: boolean;
};

export type CustomExpense = {
  customExpenseId?: number;
  title: string;
  cost: number;
  isSelected: boolean;
};

export type Savings = {
  incomePercent: number | null;
  flatAmount: number | null;
  isNoSavings: boolean;
};

export type BudgetCategory = {
  expenseCategoryId: number;
  title: string;
  description: string;
  customTitle: string;
  customDescription: string;
  customExpenses: CustomExpense[];
  standardExpenses: StandardExpense[];
  savings?: Savings | null;
};
