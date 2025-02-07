import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IncomeExpenseTableComponent } from '../income-expense-table/income-expense-table.component';
import { familyRelationships } from '../../types/family.types';
import { Career } from '../../types/career.types';
import { formatCurrency } from '../../helpers/formatCurrency';
import { PARTNER_SPOUSE_INCOME } from '../../helpers/familyHelper';

@Component({
  standalone: true,
  selector: 'rgs-income-summary',
  templateUrl: './income-summary.component.html',
  styleUrls: ['./income-summary.component.scss'],
  imports: [TranslateModule, IncomeExpenseTableComponent],
})
export class IncomeSummaryComponent {
  @Input() header?: string;
  @Input() currentCareer!: Career | null;
  @Input() hasSpouse = false;
  @Input() hasPartner = false;

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  familyRelationships = familyRelationships;

  formatIncome(num: number) {
    return formatCurrency(this.locale, num);
  }

  totalIncome() {
    let income = this.currentCareer?.monthlyNetSalary ?? 0;
    let familyMemberIncome = 0;
    if (this.hasSpouse || this.hasPartner) {
      familyMemberIncome = PARTNER_SPOUSE_INCOME;
    }
    income += familyMemberIncome;
    return income;
  }

  getRows() {
    let rows = [];
    rows.push({
      leftText: 'INCOME.MY',
      rightText: this.formatIncome(this.currentCareer?.monthlyNetSalary ?? 0),
      hover: false,
      isHighlighted: false,
    });
    if (this.hasSpouse || this.hasPartner) {
      rows.push({
        leftText: this.hasPartner ? 'INCOME.PARTNER' : 'INCOME.SPOUSE',
        rightText: this.formatIncome(PARTNER_SPOUSE_INCOME),
        hover: false,
        isHighlighted: false,
      });
    }
    return rows;
  }
}
