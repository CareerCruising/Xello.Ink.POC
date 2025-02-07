import {
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { cardFadeFromEmpty } from '../animations/cards';

@Component({
  standalone: true,
  selector: 'rgs-card-cta',
  templateUrl: './card-cta.component.html',
  styleUrls: ['./card-cta.component.scss'],
  animations: [
    trigger('CardAnimation', [
      transition('* -> fromEmptySection', [cardFadeFromEmpty]),
    ]),
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardCtaComponent {
  @Input({ required: true }) illustration = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) desc = '';
  @Input({ required: true }) ctaBtnText = '';
  @Input({ required: true }) cardColor!: 'yellow' | 'blue' | 'purple';
  @Input() animation!: 'fromEmptySection' | null;
  @Input() descPrevious!: string; // For animations
  @Output() onCtaBtnClicked = new EventEmitter();

  onClickOption() {
    this.onCtaBtnClicked.emit();
  }
}
