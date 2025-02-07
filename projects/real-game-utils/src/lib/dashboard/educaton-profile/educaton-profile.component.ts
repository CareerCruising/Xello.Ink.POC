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
import {
  CredentialObject,
  PathwayObject,
  School,
} from '../../types/education.types';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { getImage } from '../../helpers/schoolImage';
import {
  RawCredentialData,
  RawEducationData,
} from '../../types/education-list.types';
import { formatCurrency } from '../../helpers/formatCurrency';

@Component({
  standalone: true,
  selector: 'rgs-educaton-profile',
  templateUrl: './educaton-profile.component.html',
  imports: [TranslateModule],
  styleUrls: ['./educaton-profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EducationProfileComponent {
  @Input() environment!: any;
  @Input() currentSchool!: Signal<School>;
  @Input() currentCredential!: Signal<CredentialObject | RawCredentialData>;
  @Input() currentPathway!: Signal<PathwayObject>;
  @Input() selectedEducation!: Signal<RawEducationData | null>;
  @Input() educatorView = false;
  @Output() educationCardClicked = new EventEmitter();
  editHovered = false;
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  pathwayData = computed(() => {
    return [
      {
        illustration: 'il-bills-coins',
        data: this.currentCredential()?.title,
      },
      {
        illustration: 'il-clock',
        data: formatCurrency(
          this.locale,
          this.selectedEducation()?.loanPaymentPerMonth || 0
        ),
        subtitle: 'MONTHLY_LOAN_PAYMENT',
      },
    ];
  });

  getImage(school: School) {
    return getImage(school, this.environment.imageUrl);
  }

  clickCard() {
    this.educationCardClicked.emit();
  }

  openFullSchoolProfile(event: any) {
    event.stopPropagation();
    if (this.environment.local) {
      window
        .open(
          `${this.environment.cc3WebUrl}options/school/${
            this.currentSchool()?.id
          }/?uuid=`,
          '_blank'
        )
        ?.focus();
    } else {
      window
        .open(`/options/school/${this.currentSchool()?.id}/?uuid=`, '_blank')
        ?.focus();
    }
  }

  getDefaultBackgroundColor() {
    switch (this.currentPathway()?.id) {
      case 3:
        return 'gold';
      case 4:
        return 'emerald';
      case 5:
        return 'olive';
      default:
        return 'emerald';
    }
  }
}
