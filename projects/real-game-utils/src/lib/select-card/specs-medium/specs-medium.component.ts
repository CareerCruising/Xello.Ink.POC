import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'rgs-specs-medium',
  templateUrl: './specs-medium.component.html',
  styleUrls: ['./specs-medium.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpecsMediumComponent {
  @Input() illustration?: string;
  @Input() text?: string;
  @Input() description?: string;
}
