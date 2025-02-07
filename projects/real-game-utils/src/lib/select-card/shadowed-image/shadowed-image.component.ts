import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-shadowed-image',
  templateUrl: './shadowed-image.component.html',
  styleUrls: ['./shadowed-image.component.scss'],
  imports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShadowedImageComponent {
  @Input() src!: string;
  @Input() altText!: string;
  @Input() saved: boolean = false;
}
