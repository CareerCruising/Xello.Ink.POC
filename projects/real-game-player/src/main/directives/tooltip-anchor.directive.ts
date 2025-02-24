import { Directive, ElementRef, HostListener, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { InkService } from '../../services/ink.service';
import { Subject, takeUntil } from 'rxjs';
import { TooltipService } from '../services/tooltip.service';
import { InkStore } from '../../../store/ink.store';

export interface TooltipDefinition {
  id: string;
  ref: ElementRef;
  mode: string;
  alignment: string;
  bindRef: ElementRef | null;
  content: string;
}

@Directive({
  selector: '[tooltipAnchor]',
  standalone: true
})
export class TooltipAnchorDirective implements OnInit, OnDestroy {

  @Input() tooltipAnchor = '';
  @Input() tooltipMode = 'absolute';
  @Input() tooltipBind !: string;
  @Input() tooltipAlign !: string;
  @Input() tooltipColor !: string;
  @Input() tooltipEnabled = true;

  inkStore = inject(InkStore);

  enabled = false;
  focused = false;
  id = (Math.random() * 9999).toString();

  isDestroyed$ = new Subject<boolean>();

  constructor(private inkService: InkService,
              private tooltipService: TooltipService,
              private eRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.inkService.onCommandReceived
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe(command => {
        switch (command.name) {
          case 'tooltip':
            if (command.params[0] === this.tooltipAnchor) {
              this.display(command.params[1]);
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

  display(content: string, force?: Boolean): void {
    if (this.enabled && !force) { return; }
    if (!this.tooltipEnabled) {
      return;
    }
    this.enabled = true;

    let bindElm = null;
    if (this.tooltipBind) {
      let el = this.eRef.nativeElement;
      bindElm = el.querySelector(this.tooltipBind);
      if (!bindElm) {
        bindElm = el.parentElement.querySelector(this.tooltipBind);
      }
      if (!bindElm) {
        if (el.closest) {
          bindElm = el.closest(this.tooltipBind);
        } else {
          // Polyfill
          while (el.matches && !el.matches(this.tooltipBind) && el.parentNode) {
            el = el.parentNode;
          }
          if (el.matches && el.matches(this.tooltipBind)) {
            bindElm = el;
          }
        }
      }
    }

    const obj: TooltipDefinition = {
      id: this.id,
      ref: this.eRef,
      bindRef: bindElm || this.eRef.nativeElement,
      alignment: this.tooltipAlign,
      mode: this.tooltipMode,
      content: content
    };
    this.tooltipService.addTooltip(obj);
  }

  hide(force?: Boolean): void {
    if (!this.enabled && !force) { return; }
    this.enabled = false;

    const self = this;
    this.tooltipService.removeTooltip(self.id);
  }


}
