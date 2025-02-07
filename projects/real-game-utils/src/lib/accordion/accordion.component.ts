import { animate, style, transition, trigger } from '@angular/animations';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'rgs-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: 0 }),
        animate('200ms ease-in-out', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('200ms ease-in-out', style({ height: 0 })),
      ]),
    ]),
  ],
})
export class AccordionComponent {
  @Input() heading = '';
  @Input() accordionIsOpen: boolean | null = false;

  headerHovered = false;

  toggleAccordion(): void {
    this.accordionIsOpen = !this.accordionIsOpen;
  }

  toggleHover(hovered: boolean) {
    this.headerHovered = hovered;
  }
}
