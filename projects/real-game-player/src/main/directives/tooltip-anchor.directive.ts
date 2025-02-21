import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { InkService } from '../../services/ink.service';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[tooltipAnchor]',
  standalone: true
})
export class TooltipAnchorDirective implements OnInit, OnDestroy {

  @Input() tooltipAnchor = '';

  isDestroyed$ = new Subject<boolean>();

  constructor(private inkService: InkService) { }

  ngOnInit(): void {
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'tooltip':
            if (command.params[0] === this.tooltipAnchor) {
              console.log(command);
            }
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

}
