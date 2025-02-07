import { BudgetCategory } from '@careercruising/real-game-utils';
import {
  addRemoveSelectionFromCategories,
  calculateTotal,
} from './budgetHelper';

describe('addRemoveSelectionFromCategories helper function', () => {
  it('should add when given a new', () => {
    let updatedCategories = addRemoveSelectionFromCategories([], 1);
    expect(updatedCategories.indexOf(1) == 0).toEqual(true);
  });

  it('should remove is given existing', () => {
    let updatedCategories = addRemoveSelectionFromCategories([1], 1);
    expect(updatedCategories.indexOf(1) == -1).toEqual(true);
  });
});

describe('calculateTotal helper function', () => {
  const mockCategories = [
    {
      expenseCategoryId: 1,
      customDescription: '',
      customTitle: '',
      translationKey: 'housing',
      title: 'housing_category_description',
      description: 'housing_category_description',
      customExpenseDescription: 'housing_custom_expense_description',
      customExpenses: [],
      standardExpenses: [
        {
          expenseCategoryId: 1,
          expenseOptionId: 1,
          description: 'with_family_description',
          title: 'Hostel',
          cost: 100,
          isSelected: false,
        },
        {
          expenseCategoryId: 2,
          expenseOptionId: 2,
          description: 'rent_apt_roommate_description',
          title: 'Hostel',
          cost: 200,
          isSelected: false,
        },
      ],
    },
    {
      expenseCategoryId: 2,
      customDescription: '',
      customTitle: '',
      title: 'housing_category_description',
      description: 'housing_category_description',
      customExpenseDescription: 'housing_custom_expense_description',
      customExpenses: [],
      standardExpenses: [
        {
          expenseCategoryId: 1,
          expenseOptionId: 3,
          description: 'with_family_description',
          title: 'Hostel',
          cost: 300,
          isSelected: false,
        },
      ],
    },
  ];

  it('0 when categories empty', () => {
    let categories = [] as BudgetCategory[];
    expect(calculateTotal(categories)).toEqual(0);
  });

  it('should count from one category', () => {
    let mock = [...mockCategories];
    mock[0].standardExpenses[0].isSelected = true;
    expect(calculateTotal(mock)).toEqual(100);
  });

  it('should count from multiple category', () => {
    let mock = [...mockCategories];
    mock[0].standardExpenses[0].isSelected = true;
    mock[1].standardExpenses[0].isSelected = true;
    expect(calculateTotal(mock)).toEqual(400);
  });
});
