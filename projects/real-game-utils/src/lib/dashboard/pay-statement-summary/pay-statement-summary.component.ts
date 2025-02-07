import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, formatDate } from '@angular/common';
import { Career } from '../../types/career.types';
import { IncomeExpenseTableComponent } from '../income-expense-table/income-expense-table.component';
import { PayStatement } from '../../types/pay-statement.types';

@Component({
  standalone: true,
  selector: 'rgs-pay-statement-summary',
  templateUrl: './pay-statement-summary.component.html',
  styleUrls: ['./pay-statement-summary.component.scss'],
  imports: [TranslateModule, IncomeExpenseTableComponent, CommonModule],
})
export class PayStatementSummaryComponent {
  translateService = inject(TranslateService);
  locale: string = this.translateService.currentLang;
  @Input() header?: string;
  @Input() currentCareer!: Career | null;
  @Input() payStatements!: PayStatement[];
  @Input() educatoreView = false;
  @Output() clickPayStatementRow = new EventEmitter<number>();

  getRows() {
    let rows = [];
    const career = this.currentCareer;
    const payStatements = this.payStatements;

    for (const payStatement of payStatements) {
      const formattedDate = formatDate(
        payStatement.payMonth,
        'MMMM YYYY',
        this.locale
      );
      rows.push({
        id: payStatement.payStatementId,
        leftText: career?.careerName || '',
        rightText: formattedDate,
        isHighlighted: true,
      });
    }

    return rows;
  }
}
