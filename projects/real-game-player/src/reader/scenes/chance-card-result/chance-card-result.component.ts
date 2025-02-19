import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnDestroy, OnInit } from '@angular/core';
import { ChanceCardComponent } from '../chance-card/chance-card.component';
import { CommonModule } from '@angular/common';
import { ReaderContext } from '../../reader-context.enum';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { Subject, takeUntil } from 'rxjs';
import { ResultComponent } from "../../components/result/result.component";

@Component({
  selector: 'app-chance-card-result',
  standalone: true,
  imports: [CommonModule, ChoiceListComponent, ResultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chance-card-result.component.html',
  styleUrl: './chance-card-result.component.scss'
})
export class ChanceCardResultComponent extends ChanceCardComponent implements OnInit, OnDestroy {

  @Input() context !: ReaderContext;
  @Input() showChoices = true;

  ReaderContext = ReaderContext;

  isDestroyed$ = new Subject<boolean>();

  illustration = '';

  ngOnInit(): void {
    this.inkStore.setDelay(0)
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'illustration':
            this.illustration = command.params[0];
            break;
          default:
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
