import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PayStatementEmployeeInfo } from '../../../types/pay-statement.types';
import { TooltipComponent } from '../../../tooltip/tooltip.component';

@Component({
  standalone: true,
  selector: 'rgs-section-employee',
  templateUrl: './section-employee.component.html',
  styleUrls: ['./section-employee.component.scss'],
  imports: [CommonModule, TranslateModule, TooltipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionEmployeeComponent {
  @Input() employee!: PayStatementEmployeeInfo;
  @Output() onTooltipOpen = new EventEmitter<any>();
  @Output() onTooltipClose = new EventEmitter<any>();
}
