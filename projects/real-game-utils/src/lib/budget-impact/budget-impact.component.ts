import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DoughnutGraphComponent } from '../doughnut-graph/doughnut-graph.component';
import { Career } from '../types/career.types';
import { formatPercent } from '../helpers/formatPercent';
import { formatCurrency } from '../helpers/formatCurrency';

@Component({
  standalone: true,
  selector: 'rgs-budget-impact',
  templateUrl: './budget-impact.component.html',
  styleUrls: ['./budget-impact.component.scss'],
  imports: [TranslateModule, DoughnutGraphComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BudgetImpactComponent {
  @Input({ required: true }) currentCareer!: Signal<Career | null>;
  @Input({ required: true }) selectedLoanAmount!: Signal<number>;

  @Output() popoverStateChanged = new EventEmitter<boolean>();

  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  openInfoHovered = false;
  openBudgetInfoHovered = false;

  costPercent = computed(() => {
    return formatPercent(
      this.locale,
      Math.round(
        (this.selectedLoanAmount() /
          (this.currentCareer()?.monthlyNetSalary ?? 0)) *
          100,
      ),
    );
  });

  remainingIncome = computed(() => {
    return formatCurrency(
      this.locale,
      (this.currentCareer()?.monthlyNetSalary ?? 0) - this.selectedLoanAmount(),
    );
  });

  formatAmount(amount: number) {
    return formatCurrency(this.locale, amount);
  }

  openBudgetImpactPopover(newState?: boolean) {
    let popover: any = document.querySelector('#budgetImpactPopover');
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
