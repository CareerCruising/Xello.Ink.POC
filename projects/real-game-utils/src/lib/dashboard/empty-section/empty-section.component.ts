import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-dashboard-empty-section',
  templateUrl: './empty-section.component.html',
  styleUrls: ['./empty-section.component.scss'],
  imports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmptySectionComponent {
  @Input() description = '';
  @Input() textSize = 'sm';
  @Input() buttonType: 'link' | 'cta' = 'link';
  @Input() illustration = '';
  @Input() linkText = '';
  @Input() heapId = '';
  @Input() textMutted = false;
  @Input() linkAction = () => {};
}
