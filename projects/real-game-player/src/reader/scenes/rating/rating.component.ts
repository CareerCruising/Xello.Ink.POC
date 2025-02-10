import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from "../basic/basic.component";
import { ChoiceRatingComponent } from "../../components/choice-rating/choice-rating.component";
import { Choice } from 'inkjs/engine/Choice';
import { CareerStore } from '../../../../store/career.store';

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
export class RatingComponent implements OnInit {

  choiceFrame: { content: string } | null = null;
  choiceSelected: Choice | null = null;

  careerStore = inject(CareerStore);

  lookupContent = computed(() => {
    return this.careerStore.career()?.briefIntroduction ?? ''
  });

  constructor(public inkService: InkService) {
    this.inkService.delay = 0;

    effect(() => {
      console.log(this.careerStore.career());
    })
  }

  ngOnInit() {
    this.inkService.onCommandReceived.subscribe(cmd => {
      switch (cmd.name) {
        case 'lookup':
          const content = cmd.params[0].split('.');
          if (content.length > 0) {
            switch (content[0]) {
              case 'career':
                console.log('get career');
                break;
              default:
                break;
            }
            break;
          }
          this.choiceFrame = {
            content: cmd.params.join(' ')
          }
          break;
        default:
          break;
      }
    });
  }

  selectChoice(choice: Choice) {
    this.choiceSelected = choice;
  }

  confirmChoice() {
    if (!this.choiceSelected) { return; }
    this.inkService.SelectChoice(this.choiceSelected);
    this.choiceSelected = null;
  }

}
