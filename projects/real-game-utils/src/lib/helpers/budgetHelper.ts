import { RawExpenseData, RawSelectionData } from '../types/budget.types';
import {
  BudgetCategory,
  CustomExpense,
  Savings,
  StandardExpense,
} from '../types/expenses.types';
import { LocationData } from '../types/location.types';

export const dineoutCategoryExpenseIds = [20, 21, 22]; //dineout section expenses

export const addRemoveSelectionFromCategories = (
  categories: RawSelectionData['savedExpense'],
  selectionId: number,
) => {
  let newCategories = [...categories];
  let index = newCategories.indexOf(selectionId);
  if (index >= 0) {
    newCategories.splice(index, 1);
  } else {
    newCategories.push(selectionId);
  }
  return newCategories;
};

export const addRemoveDineoutSelectionFromCategories = (
  categories: RawSelectionData['savedExpense'],
  selectionId: number,
) => {
  let newCategories = [...categories];
  if (newCategories.includes(selectionId)) {
    newCategories = newCategories.filter((id) => id !== selectionId);
  } else {
    newCategories = newCategories.filter(
      (id) => !dineoutCategoryExpenseIds.includes(id),
    );
    newCategories.push(selectionId);
  }
  return newCategories;
};

export const calculateTotal = (
  categories: Array<BudgetCategory>,
  salary: number = 0,
) => {
  return categories.reduce((total, selection) => {
    return (
      total +
      calculateCategoryTotal(selection.customExpenses) +
      (selection.standardExpenses
        ? calculateCategoryTotal(selection.standardExpenses)
        : 0) +
      Math.round(((selection.savings?.incomePercent || 0) / 100) * salary) +
      (selection.savings?.flatAmount ?? 0)
    );
  }, 0);
};

export const calculateCategoryTotal = (
  category: CustomExpense[] | StandardExpense[],
) => {
  return category.reduce((total, selection) => {
    return total + (selection.isSelected ? selection.cost : 0);
  }, 0);
};

export const processBudgetCategories = (
  costs: LocationData['expenses'],
  categories: RawExpenseData['categories'],
  options: RawExpenseData['expenses'],
  selections: RawSelectionData,
) => {
  let processedBudgetCategories = categories.map((category) => {
    let standardExpenses = options.filter((data) => {
      return data.expenseCategoryId == category.expenseCategoryId;
    });

    let filteredStandardExpense = standardExpenses.map((expense) => {
      let cost = costs.find(
        (locationCost) =>
          locationCost.expenseOptionId == expense.expenseOptionId,
      );

      let selected =
        selections.savedExpense.indexOf(expense.expenseOptionId) > -1;

      return {
        ...expense,
        cost: cost?.amount ?? 0,
        isSelected: selected,
      };
    });

    let customExpenses: CustomExpense[] = selections.customExpense.reduce(
      (result: CustomExpense[], item) => {
        if (item.expenseCategoryId === category.expenseCategoryId) {
          result.push({
            cost: item.amount,
            isSelected: item.isSelected,
            title: item.title,
            customExpenseId: item.customExpenseId,
          });
        }
        return result;
      },
      [],
    );

    return {
      ...category,
      standardExpenses: filteredStandardExpense,
      customExpenses: customExpenses,
      savings:
        category.expenseCategoryId == 13
          ? selections.savingsExpense || ({} as Savings)
          : null,
    } as BudgetCategory;
  });
  return processedBudgetCategories;
};

export const isDineoutExpense = (selectionId: number) => {
  return dineoutCategoryExpenseIds.includes(selectionId);
};

export const getOtherDineoutExpenseIds = (
  savedExpenses: RawSelectionData['savedExpense'],
  id: number,
) => {
  const otherExpenses = dineoutCategoryExpenseIds.filter(
    (expenseId) => expenseId !== id && savedExpenses.includes(expenseId),
  );
  return otherExpenses;
};
