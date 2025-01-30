import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChoiceListComponent } from '../choice-list/choice-list.component';
import { CommonModule } from '@angular/common';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-choice-rating',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './choice-rating.component.html',
  styleUrl: './choice-rating.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ height: 0, opacity: 0 }),
          animate('0.5s ease-in-out', style({ height: '*', opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class ChoiceRatingComponent extends ChoiceListComponent {

}
