import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { formatCurrency } from '../helpers/formatCurrency';

@Component({
  standalone: true,
  selector: 'rgs-loan-breakdown',
  templateUrl: './loan-breakdown.component.html',
  imports: [CommonModule, TranslateModule],
  styleUrls: ['./loan-breakdown.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoanBreakdownComponent {
  @Input({ required: true }) totalInterestPrincipal!: {
    total: number;
    interest: number;
    principal: number;
  };

  @Input({ required: true }) loanTerm!: number;
  @Input({ required: true }) loanInterestRate!: number;

  @Output() popoverStateChanged = new EventEmitter<boolean>();

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  openInfoHovered = false;

  get maxBarWidths() {
    const { interest, total } = this.totalInterestPrincipal;

    let percentage = (interest / total) * 100;
    return {
      amount: `max-width: ${100 - percentage}%`,
      interest: `max-width: ${percentage}%`,
    };
  }

  formatNumber(num: number): string {
    return formatCurrency(this.locale, num);
  }

  openLoanConditionPopover(newState?: boolean) {
    let popover: any = document.querySelector('#loanConditionPopover');
    newState = newState ?? !popover?.isOpen;
    if (newState) {
      popover.open();
    } else {
      popover.close();
    }
    this.popoverStateChanged.emit(newState);
  }

  closingFunction() {
    this.popoverStateChanged.emit(false);
  }
}
