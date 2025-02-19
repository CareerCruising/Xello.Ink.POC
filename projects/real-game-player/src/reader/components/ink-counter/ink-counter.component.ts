import { Component, effect, inject, Input, OnInit, signal, Signal } from '@angular/core';
import { InkStore } from '../../../../store/ink.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ink-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ink-counter.component.html',
  styleUrl: './ink-counter.component.scss'
})
export class InkCounterComponent implements OnInit {

  @Input() track = '';
  @Input() prefix = '';

  inkStore = inject(InkStore);

  currentValue = signal(0);
  valueDisplayed = 0;
  isAnimating = false

  constructor() {
    effect(() => {
      if (this.isAnimating) { return; }
      if (this.valueDisplayed != this.currentValue()) {
        this.isAnimating = true;
        const delta = this.currentValue() - this.valueDisplayed;
        this.animate(delta)
      }
    });
  }

  ngOnInit(): void {
    this.currentValue.set(+(this.inkStore.story().variablesState.$(this.track) || 0));
    this.inkStore.story().ObserveVariable(this.track, (varName, value) => {
      this.currentValue.set(+value);
    })
  }

  animate(delta: number): void {
    if (delta <= 0) {
      this.isAnimating = false;
      this.valueDisplayed = this.currentValue();
      return;
    }
    setTimeout(() => {
      this.valueDisplayed += 1;
      delta -= 1;
      this.animate(delta);
    }, 50);
  }
}
