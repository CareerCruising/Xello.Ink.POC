export type LocationData = {
  careerIncome: {
    careerId: number;
    grossSalary: number;
  }[];
  expenses: {
    expenseOptionId: number;
    amount: number;
  }[];
  livingWage: {
    parents: number;
    children: number;
    monthlyLivingWage: number;
  }[];
};
