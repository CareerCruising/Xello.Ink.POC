import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-row-earning-deduction',
  templateUrl: './row-earning-deduction.component.html',
  styleUrls: ['./row-earning-deduction.component.scss'],
  imports: [CommonModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RowEarningDeductionComponent {
  @Input() leftText!: string;
  @Input() rightText!: string;
  @Input() highlighted: boolean = false;
}
