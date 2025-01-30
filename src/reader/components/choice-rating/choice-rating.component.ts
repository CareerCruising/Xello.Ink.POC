import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChoiceListComponent } from '../choice-list/choice-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choice-rating',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './choice-rating.component.html',
  styleUrl: './choice-rating.component.scss'
})
export class ChoiceRatingComponent extends ChoiceListComponent {

}
