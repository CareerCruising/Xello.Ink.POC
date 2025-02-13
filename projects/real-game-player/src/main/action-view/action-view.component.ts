import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { ReaderComponent } from "../../reader/reader.component";
import { InkService } from '../../services/ink.service';
import { Subject, takeUntil } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-view',
  standalone: true,
  imports: [CommonModule, ReaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('isOpen', [
      state('false', style({ transform: 'translateY(100%)'})),
      state('true', style({ transform: 'translateY(0%)'})),
      transition('false <=> true', [animate('0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)')])
    ])
  ],
  templateUrl: './action-view.component.html',
  styleUrl: './action-view.component.scss'
})
export class ActionViewComponent implements OnInit, OnDestroy {

  actionViewTitle = '';
  isDestroyed$ = new Subject<boolean>();
  isOpen = false;

  constructor(private inkService: InkService) {}

  ngOnInit() {
    this.actionViewTitle = this.inkService.story.variablesState.$('actionViewTitle')?.toString() ?? ''
    this.inkService.story.ObserveVariable('actionViewTitle', (variableName, newValue) => {
      this.actionViewTitle = newValue
    })
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'action-view':
            this.isOpen = command.params[0] === 'open';
            break;
          default:
            break;
        }
      })

    this.inkService.currentTemplate$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(template => {
        console.log(template);
      })
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

  onNext(): void {

  }

}
