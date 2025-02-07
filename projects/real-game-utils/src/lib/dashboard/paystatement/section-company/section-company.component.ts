import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PayStatementCompanyInfo } from '../../../types/pay-statement.types';
import { TooltipComponent } from '../../../tooltip/tooltip.component';

@Component({
  standalone: true,
  selector: 'rgs-section-company',
  templateUrl: './section-company.component.html',
  styleUrls: ['./section-company.component.scss'],
  imports: [CommonModule, TranslateModule, TooltipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionCompanyComponent {
  @Input() company!: PayStatementCompanyInfo;
  @Input() payPeriod: string = '';
  @Input() statementNumber: string = '';
  @Output() onTooltipOpen = new EventEmitter<any>();
  @Output() onTooltipClose = new EventEmitter();
}
