import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RowEarningDeductionComponent } from '../row-earning-deduction/row-earning-deduction.component';
import { RowEarningDeduction } from '../../../types/pay-statement.types';
import { TooltipComponent } from '../../../tooltip/tooltip.component';

@Component({
  standalone: true,
  selector: 'rgs-section-earnings-deductions',
  templateUrl: './section-earnings-deductions.component.html',
  styleUrls: ['./section-earnings-deductions.component.scss'],
  imports: [CommonModule, TranslateModule, RowEarningDeductionComponent, TooltipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionEarningsDeductionsComponent implements OnChanges {
  @Input() header!: string;
  @Input() rows: RowEarningDeduction[] = [];
  @Input() tooltipContent !: string;
  @Input() tooltipLabel !: string;
  @Output() onTooltipOpen = new EventEmitter<any>();
  @Output() onTooltipClose = new EventEmitter<any>();

  tooltipCompiled !: string;

  constructor(private translate: TranslateService) {}

  ngOnChanges() {
    this.tooltipCompiled = `${this.tooltipContent ? this.translate.instant(this.tooltipContent) : ''}${this.rows.map(x => x.tooltip ? this.translate.instant(x.tooltip) : '').join('')}`
  }
}
