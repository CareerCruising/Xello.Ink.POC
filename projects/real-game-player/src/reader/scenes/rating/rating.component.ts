import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, input, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from "../basic/basic.component";
import { ChoiceRatingComponent } from "../../components/choice-rating/choice-rating.component";
import { Choice } from 'inkjs/engine/Choice';
import { CareerStore } from '../../../../store/career.store';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { InkStore } from '../../../../store/ink.store';
import { ReaderContext } from '../../reader-context.enum';

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
export class RatingComponent implements OnInit, OnDestroy {

  @Input() context: ReaderContext = ReaderContext.Basic;

  inkStore = inject(InkStore);

  ReaderContext = ReaderContext;

  choiceFrame: { content: string } | null = null;

  careerStore = inject(CareerStore);
  illustration = '';
  illustrationBG = ''

  lookupContent = '';

  destroyed$ = new Subject<boolean>();


  constructor(public inkService: InkService) {
    this.inkStore.setDelay(0)
  }

  ngOnInit() {
    this.inkService.onLookup
      .pipe(takeUntil(this.destroyed$))
      .subscribe(str => {
        this.lookupContent = str;
      });

    this.inkService.onCommandReceived
      .pipe(takeUntil(this.destroyed$))
      .subscribe(cmd => {
        switch (cmd.name) {
          case 'content':
            this.lookupContent = cmd.params.join(' ');
            break;
          case 'illustration':
            this.illustration = cmd.params[0];
            break;
          case 'illustration-bg':
            this.illustrationBG = 'bg--' + cmd.params[0];
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  selectChoice(choice: Choice) {
    this.inkStore.selectChoice(choice);
  }

  confirmChoice() {
    const selectedChoice = this.inkStore.selectedChoice();
    if (!selectedChoice) { return; }
    this.inkService.SelectChoice(selectedChoice);
  }

}
