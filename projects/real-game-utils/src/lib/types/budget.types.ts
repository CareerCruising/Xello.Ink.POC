export type RawExpenseData = {
  categories: {
    customDescription: string;
    customTitle: string;
    description: string;
    expenseCategoryId: number;
    title: string;
  }[];
  expenses: {
    description: string;
    expenseCategoryId: number;
    expenseOptionId: number;
    title: string;
  }[];
};

export type RawSelectionData = {
  customExpense: {
    customExpenseId: number;
    expenseCategoryId: number;
    title: string;
    amount: number;
    isSelected: boolean;
  }[];
  savedExpense: number[];
  savingsExpense?: {
    incomePercent: number | null;
    flatAmount: number | null;
    isNoSavings: boolean;
  };
};
