import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { Subject, takeUntil } from 'rxjs';

interface IResult { variable: string, name: string, icon: string, change: number };


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit, OnDestroy {

  results: {[variable: string]: IResult} = {};
  isDestroyed$ = new Subject<boolean>();

  constructor(private inkService: InkService) {}

  ngOnInit(): void {
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'modify':
            var existing = this.results[command.params[0]]
            if (existing) {
              this.results[command.params[0]] = {
                ...existing,
                change: +(existing?.change ?? 0) + (+command.params[1])
              };
            } else {
              this.results[command.params[0]] = {
                variable: command.params[0],
                name: this.getName(command.params[0]),
                icon: this.getIcon(command.params[0]),
                change: +command.params[1]
              };
            }
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
