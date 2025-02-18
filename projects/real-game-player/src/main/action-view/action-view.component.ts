import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ReaderComponent } from "../../reader/reader.component";
import { InkService } from '../../services/ink.service';
import { Subject, takeUntil } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { InkStore } from '../../../store/ink.store';

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

  inkStore = inject(InkStore);

  actionViewTitle = '';
  isDestroyed$ = new Subject<boolean>();

  constructor(private inkService: InkService) {}

  ngOnInit() {
    this.actionViewTitle = this.inkStore.story().variablesState.$('actionViewTitle')?.toString() ?? ''
    this.inkStore.story().ObserveVariable('actionViewTitle', (_: string, newValue: string) => {
      this.actionViewTitle = newValue
    })
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'action-view':
            this.inkStore.setActionViewOpen(command.params[0] === 'open');
            break;
          default:
            break;
        }
      })
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

  onNext(): void {

  }

}
