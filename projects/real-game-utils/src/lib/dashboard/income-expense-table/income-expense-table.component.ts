import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IncomeExpenseTableRow } from './income-expense-table.types';
import { IncomeExpenseTableRowComponent } from './income-expense-table-row/income-expense-table-row.component';
import { formatCurrency } from '../../helpers/formatCurrency';

@Component({
  standalone: true,
  selector: 'rgs-income-expense-table',
  templateUrl: './income-expense-table.component.html',
  styleUrls: ['./income-expense-table.component.scss'],
  imports: [TranslateModule, IncomeExpenseTableRowComponent],
})
export class IncomeExpenseTableComponent {
  @Input() title: string = '';
  @Input() rows: IncomeExpenseTableRow[] = [];
  @Output() onClickRow = new EventEmitter<number | undefined>();
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  onClick(id: number | undefined) {
    this.onClickRow.emit(id);
  }

  formatExpenses(num: number) {
    return formatCurrency(this.locale, num);
  }
}
