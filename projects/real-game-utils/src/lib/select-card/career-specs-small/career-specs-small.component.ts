import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'rgs-career-specs-small',
  templateUrl: './career-specs-small.component.html',
  styleUrls: ['./career-specs-small.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CareerSpecsSmallComponent {
  @Input() illustration?: string;
  @Input() text?: string;
}
