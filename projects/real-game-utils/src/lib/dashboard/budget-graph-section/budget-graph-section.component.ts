import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Career } from '../../types/career.types';
import { BudgetFillBarComponent } from '../../budget-fill-bar/budget-fill-bar.component';
import { formatCurrency } from '../../helpers/formatCurrency';
import { RawEducationData } from '../../types/education-list.types';

@Component({
  standalone: true,
  selector: 'rgs-budget-graph-section',
  templateUrl: './budget-graph-section.component.html',
  styleUrls: ['./budget-graph-section.component.scss'],
  imports: [TranslateModule, BudgetFillBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BudgetGraphSectionComponent {
  @Input() currentEducation!: Signal<RawEducationData | null>;
  @Input() familyExpense!: Signal<number>;
  @Input() familyIncome!: Signal<number>;
  @Input() currentCareer!: Signal<Career | null>;
  @Input() totalBudgetCost!: Signal<number>;
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  totalIncome = computed(() => {
    let total = this.currentCareer()?.monthlyNetSalary ?? 0;

    total += this.familyIncome();

    return total;
  });

  totalExpenses = computed(() => {
    let total = this.totalBudgetCost();

    total += this.familyExpense();

    const selectedEducation = this.currentEducation();
    if (selectedEducation) {
      total += selectedEducation.loanPaymentPerMonth;
    }

    return total;
  });

  formatMoney(amount: number) {
    return formatCurrency(this.locale, amount);
  }
}
