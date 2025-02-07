import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';
import { Career } from '../types/career.types';
import { TranslateService } from '@ngx-translate/core';
import { formatCurrency } from '../helpers/formatCurrency';
import { SelectCardComponent } from '../select-card/select-card.component';

@Component({
  selector: 'lib-card-career',
  standalone: true,
  imports: [SelectCardComponent],
  templateUrl: './card-career.component.html',
  styleUrl: './card-career.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardCareerComponent {
  @Input() career?: Career;
  @Input() index!: number;
  @Input() saved: boolean = true;
  @Input() imageURL: string = 'assets/';
  isCurrentLanguageEnglish = signal<boolean>(true);
  @Output() onClickCareer = new EventEmitter<Career>();
  @Input() selected: boolean = false;

  careerData = computed(() => [
    {
      illustration: 'il-bills-coins',
      data: formatCurrency(
        this.translateService.currentLang,
        this.career?.grossSalary?.[0] ?? 0
      ),
      subtitle: 'A_YEAR',
    },
    {
      illustration: 'il-clock',
      data: this.career?.workHoursPerWeek.toString() ?? '',
      subtitle: 'HOURS_A_WEEK',
    },
    {
      illustration: 'il-suitcase',
      data: this.career?.vacationWeeksPerYear.toString() ?? '',
      subtitle: 'WEEKS_OFF_A_YEAR',
    },
  ]);

  constructor(private translateService: TranslateService) {}

  onClick() {
    this.onClickCareer.emit(this.career);
  }
}
