import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnDestroy } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-basic',
  standalone: true,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  imports: [ CommonModule, ChoiceListComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
export class BasicComponent implements OnDestroy {

  inkStore = inject(InkStore);

  @Input() animate = true;
  @Input() showChoices = true;

  isDestroyed$ = new Subject<boolean>();
  
  constructor(public inkService: InkService) {}

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }
}
