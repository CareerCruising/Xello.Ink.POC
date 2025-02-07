import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IncomeExpenseTableRowComponent } from '../../income-expense-table/income-expense-table-row/income-expense-table-row.component';
import { formatCurrency } from '../../../helpers/formatCurrency';
import { Router } from '@angular/router';

@Component({
  selector: 'rgs-other-expense-table',
  standalone: true,
  imports: [IncomeExpenseTableRowComponent, TranslateModule],
  templateUrl: './other-expense-table.component.html',
  styleUrl: './other-expense-table.component.scss',
})
export class OtherExpenseTableComponent {
  @Input() isFamilySelected = false;
  @Input() totalEducationExpense = 0;
  @Input() totalFamilyExpense = 0;
  @Input() educatorView = false;
  @Input() isPathwaySelected = false;
  @Output() clickFamilyRow = new EventEmitter();
  @Output() clickStudentLoanRow = new EventEmitter();
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  router = inject(Router);

  clickFamRow() {
    this.clickFamilyRow.emit();
  }
  clickEduRow() {
    this.clickStudentLoanRow.emit();
  }

  formatExpenses(num: number) {
    return formatCurrency(this.locale, num);
  }
}
