import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
} from '@angular/core';
import { RowEarningDeductionComponent } from './row-earning-deduction/row-earning-deduction.component';
import { SectionCompanyComponent } from './section-company/section-company.component';
import { SectionEmployeeComponent } from './section-employee/section-employee.component';
import { SectionEarningsDeductionsComponent } from './section-earnings-deductions/section-earnings-deductions.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PayStatement } from '../../types/pay-statement.types';
import {
  getTotalEarningsFromPayStatement,
  getTotalDeductionsFromPayStatement,
} from '../../helpers/careerHelper';
import {
  getPayPeriod,
  formatPayStatementDate,
  getPaySatementEarningsRows,
  getPaySatementDeducationRows,
  getPaySatementSummaryRow,
} from '../../helpers/payStatementHelper';
import { Career } from '../../types/career.types';
import { PlayData } from '../../types/play.types';
import { User } from '../../types/user.types';

@Component({
  standalone: true,
  selector: 'rgs-pay-statement-section',
  templateUrl: './pay-statement-section.component.html',
  styleUrls: ['./pay-statement-section.component.scss'],
  imports: [
    TranslateModule,
    RowEarningDeductionComponent,
    SectionCompanyComponent,
    SectionEmployeeComponent,
    SectionEarningsDeductionsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PayStatementSectionComponent {
  @Input() payStatement: PayStatement | null = null;
  @Input() currentCareer: Career | null = null;
  @Input() currentPlay: PlayData | null = null;
  @Input() user: User | null = null;
  @Output() onTooltipOpen = new EventEmitter<any>();
  @Output() onTooltipClose = new EventEmitter<any>();

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  payPeriod() {
    return getPayPeriod(this.payStatement, this.locale);
  }

  formatPayStatementDate() {
    return formatPayStatementDate(this.payStatement, this.locale);
  }

  getRowsEarnings() {
    return getPaySatementEarningsRows(this.locale, this.payStatement);
  }

  getRowsDeductions() {
    return getPaySatementDeducationRows(this.locale, this.payStatement);
  }

  getRowsSummary() {
    return getPaySatementSummaryRow(
      this.locale,
      getTotalEarningsFromPayStatement(this.payStatement),
      getTotalDeductionsFromPayStatement(this.payStatement)
    );
  }
}
