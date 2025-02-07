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
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CareerLevelBarComponent } from './career-level-bar/career-level-bar.component';
import { Career } from '../../types/career.types';
import { formatCurrency } from '../../helpers/formatCurrency';

@Component({
  standalone: true,
  selector: 'rgs-career-profile',
  templateUrl: './career-profile.component.html',
  styleUrls: ['./career-profile.component.scss'],
  imports: [TranslateModule, CareerLevelBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CareerProfileComponent {
  @Input() currentCareer!: Signal<Career | null>;
  @Input() environment!: any;
  @Input() userAvatarURL!: string;
  @Input() educatorView = false;
  @Input() isAssigned = false;
  @Output() clickCareerCard = new EventEmitter();
  readonly router = inject(Router);
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  editHovered = false;

  careerData = computed(() => {
    let currentPlay = this.currentCareer();
    return [
      {
        illustration: 'il-bills-coins',
        data: formatCurrency(this.locale, currentPlay?.monthlyNetSalary || 0),
        subtitle: 'A_MONTH',
      },
      {
        illustration: 'il-clock',
        data: currentPlay?.workHoursPerWeek?.toString(),
        subtitle: 'A_WEEK',
        unit: 'HOURS',
      },
      {
        illustration: 'il-suitcase',
        data: currentPlay?.vacationWeeksPerYear?.toString(),
        subtitle: 'OFF_A_YEAR',
        unit: 'WEEKS',
      },
    ];
  });

  clickCard() {
    this.clickCareerCard.emit();
  }

  openFullCareerProfile(event: any) {
    event.stopPropagation();
    if (this.environment.local) {
      window
        .open(
          `${this.environment.cc3WebUrl}options/career/${
            this.currentCareer()?.careerId
          }/?uuid=`,
          '_blank',
        )
        ?.focus();
    } else {
      window
        .open(
          `/options/career/${this.currentCareer()?.careerId}/?uuid=`,
          '_blank',
        )
        ?.focus();
    }
  }
}
