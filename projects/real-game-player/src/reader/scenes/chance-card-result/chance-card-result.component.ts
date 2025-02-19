import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnDestroy, OnInit } from '@angular/core';
import { ChanceCardComponent } from '../chance-card/chance-card.component';
import { CommonModule } from '@angular/common';
import { ReaderContext } from '../../reader-context.enum';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-chance-card-result',
  standalone: true,
  imports: [CommonModule, ChoiceListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chance-card-result.component.html',
  styleUrl: './chance-card-result.component.scss'
})
export class ChanceCardResultComponent extends ChanceCardComponent implements OnInit, OnDestroy {

  @Input() context !: ReaderContext;
  @Input() showChoices = true;

  ReaderContext = ReaderContext;
  results: {variable: string, name: string, icon: string, change: number}[] = [];

  isDestroyed$ = new Subject<boolean>();

  illustration = '';

  ngOnInit(): void {
    this.inkStore.setDelay(0)
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'modify':
            this.results.push({
              variable: command.params[0],
              name: this.getName(command.params[0]),
              icon: this.getIcon(command.params[0]),
              change: +command.params[1]
            });
            break;
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

  getName(variable: string): string {
    switch (variable) {
      case 'xp':
        return 'XP';
      case 'wellbeing':
        return 'well-being';
      case 'money':
        return '';
      default:
        return variable;
    }
  }

  getIcon(variable: string): string {
    switch (variable) {
      case 'money':
        return 'ic-money-bills';
      case 'xp':
        return 'ic-ribbon';
      case 'career':
        return 'ic-id-badge';
      case 'wellbeing':
        return 'ic-fun';
      default:
        return '';
    }
  }

}
