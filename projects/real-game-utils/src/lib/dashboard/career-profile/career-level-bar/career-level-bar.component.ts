import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-career-level-bar',
  templateUrl: './career-level-bar.component.html',
  imports: [TranslateModule],
  styleUrls: ['./career-level-bar.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CareerLevelBarComponent {
  @Input() level: 1 | 2 | 3 = 1;
  @Input() userAvatarURL!: string;
}
