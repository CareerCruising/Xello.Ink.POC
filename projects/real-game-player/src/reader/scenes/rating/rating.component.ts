import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from "../basic/basic.component";
import { ChoiceRatingComponent } from "../../components/choice-rating/choice-rating.component";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, BasicComponent, ChoiceRatingComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class RatingComponent {

  constructor(public inkService: InkService) {
    this.inkService.delay = 0;
  }

}
