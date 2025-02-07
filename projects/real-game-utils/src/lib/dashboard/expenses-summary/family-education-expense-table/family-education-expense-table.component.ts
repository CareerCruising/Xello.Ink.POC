import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmptySectionComponent } from '../../empty-section/empty-section.component';
import { IncomeExpenseTableRowComponent } from '../../income-expense-table/income-expense-table-row/income-expense-table-row.component';
import { formatCurrency } from '../../../helpers/formatCurrency';
import { Router } from '@angular/router';

@Component({
  selector: 'rgs-family-education-expense-table',
  standalone: true,
  imports: [
    EmptySectionComponent,
    IncomeExpenseTableRowComponent,
    TranslateModule,
  ],
  templateUrl: './family-education-expense-table.component.html',
  styleUrl: './family-education-expense-table.component.scss',
})
export class FamilyEducationExpenseTableComponent {
  @Input() title: string = '';
  @Input() isEducationSelected = false;
  @Input() isFamilySelected = false;
  @Input() totalEducationExpense = 0;
  @Input() totalFamilyExpense = 0;
  @Input() educatorView = false;
  @Output() clickExpensesViewButton = new EventEmitter();
  @Output() clickFamilyRow = new EventEmitter();
  @Output() clickStudentLoanRow = new EventEmitter();

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  router = inject(Router);

  formatExpenses(num: number) {
    return formatCurrency(this.locale, num);
  }

  clickExpensesButton() {
    this.clickExpensesViewButton.emit();
  }

  clickFamView() {
    this.clickFamilyRow.emit();
  }

  clickEducationView() {
    this.clickStudentLoanRow.emit();
    // this.router.navigate(['', { outlets: { overlay: ['education', -1] } }]);
  }
}
