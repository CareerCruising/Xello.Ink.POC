import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-icon-bullet-point',
  imports: [TranslateModule],
  templateUrl: './icon-bullet-point.component.html',
  styleUrls: ['./icon-bullet-point.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconBulletPointComponent {
  @Input() text: string = '';
  @Input() icon: string = 'ic-dot';
}
