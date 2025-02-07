import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface FamilyWageInfo {
  parents: number;
  children: number;
  monthlyLivingWage: string;
  isSelected: boolean;
}

@Component({
  selector: 'rgs-family-livable-wage-legend',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './family-livable-wage-legend.component.html',
  styleUrl: './family-livable-wage-legend.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FamilyLivableWageLegendComponent {
  @Input() familyWageData: FamilyWageInfo[] = [];
  @Input() avatar = '';

  translateService = inject(TranslateService);

  locale = this.translateService.currentLang;
}
