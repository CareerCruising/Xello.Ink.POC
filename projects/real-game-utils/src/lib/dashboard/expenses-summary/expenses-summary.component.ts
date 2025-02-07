import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IncomeExpenseTableComponent } from '../income-expense-table/income-expense-table.component';
import { Router } from '@angular/router';
import { IncomeExpenseTableRow } from '../income-expense-table/income-expense-table.types';
import { IncomeExpenseTableRowComponent } from '../income-expense-table/income-expense-table-row/income-expense-table-row.component';
import { RawEducationData } from '../../types/education-list.types';
import { EmptySectionComponent } from '../empty-section/empty-section.component';
import { Career } from '../../types/career.types';
import { FamilyEducationExpenseTableComponent } from './family-education-expense-table/family-education-expense-table.component';
import { OtherExpenseTableComponent } from './other-expense-table/other-expense-table.component';
import { BudgetCategory } from '../../types/expenses.types';
import { formatCurrency } from '../../helpers/formatCurrency';
import { calculateTotal } from '../../helpers/budgetHelper';

interface HeapIDKeys {
  [key: number]: string;
}

@Component({
  selector: 'rgs-expenses-summary',
  standalone: true,
  imports: [
    TranslateModule,
    IncomeExpenseTableComponent,
    IncomeExpenseTableRowComponent,
    EmptySectionComponent,
    FamilyEducationExpenseTableComponent,
    OtherExpenseTableComponent,
  ],
  templateUrl: './expenses-summary.component.html',
  styleUrl: './expenses-summary.component.scss',
})
export class ExpensesSummaryComponent {
  @Input() header?: string;
  router = inject(Router);

  @Input() currentCareer!: Signal<Career | null>;
  @Input() budgetCategories!: Signal<BudgetCategory[]>;
  @Input() hasMadeBudgetSelections!: Signal<boolean>;
  @Input() selectedEducation!: Signal<RawEducationData | null>;
  @Input() totalFamilyExpense!: Signal<number>;
  @Input() hasFamilySelected = false;
  @Input() educatorView = false;
  @Output() clickFamilyRow = new EventEmitter();
  @Output() clickStudentLoanRow = new EventEmitter();
  @Output() clickBudgetExpenseRow = new EventEmitter<number>();
  @Output() clickBudgetExpenseEmpty = new EventEmitter();

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  expensesHeapIdKeys: HeapIDKeys = {
    1: 'housing',
    2: 'transportation',
    3: 'cooking',
    4: 'dining-out',
    5: 'utilities',
    6: 'communication',
    7: 'personal-care',
    8: 'entertainment',
    9: 'household',
    10: 'healthcare',
    11: 'insurance',
    12: 'clothes',
    13: 'savings',
    14: 'custom-expenses',
  };

  expensesSummaryData = computed(() => {
    let rows: IncomeExpenseTableRow[] = [];
    let totalExpenses: number = 0;
    const categories = this.budgetCategories();
    const currentCareer = this.currentCareer();

    const budgetHasSelections = this.hasMadeBudgetSelections();
    if (budgetHasSelections) {
      for (const category of categories) {
        let total = 0;
        let formattedTotal = '-';
        const hasSelections = this.categoryHasSelections(category);

        if (hasSelections) {
          total = calculateTotal([category], currentCareer?.monthlyNetSalary);
          formattedTotal = this.formatExpenses(total);
        }

        const heapIdKey = this.expensesHeapIdKeys[category.expenseCategoryId];

        rows.push({
          id: category.expenseCategoryId,
          leftText: category.title,
          rightText: formattedTotal,
          heapId: `student-real-game-edited-${heapIdKey}`,
          hover: true,
          isHighlighted: true,
        });

        totalExpenses += total;
      }
    }
    const selectedEducation = this.selectedEducation();
    if (selectedEducation) {
      totalExpenses += selectedEducation.loanPaymentPerMonth;
    }

    const familyExpense = this.totalFamilyExpense();
    totalExpenses += familyExpense;

    return {
      rows: rows,
      total: totalExpenses,
    };
  });

  categoryHasSelections(category: BudgetCategory) {
    let standardSelections = category.standardExpenses.filter(
      (expense) => expense.isSelected,
    );
    let customSelections = category.customExpenses.filter(
      (expense) => expense.isSelected,
    );

    return (
      standardSelections.length > 0 ||
      customSelections.length > 0 ||
      (category.savings && Object.keys(category.savings).length > 0)
    );
  }

  formatExpenses(num: number) {
    return formatCurrency(this.locale, num);
  }
}
