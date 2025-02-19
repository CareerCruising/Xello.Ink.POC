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
  isAnimating = false;
  isIncreasing = false;
  isDecreasing = false;
  currentTimeout: NodeJS.Timeout | null = null;

  constructor() {
    effect(() => {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }
      if (this.isAnimating) {
        this.isIncreasing = false;
        this.isDecreasing = false;
        this.isAnimating = false;
      }
      if (this.valueDisplayed != this.currentValue()) {
        this.isAnimating = true;
        const delta = this.currentValue() - this.valueDisplayed;
        if (delta > 0) {
          this.increase(delta)
        } else {
          this.decrease(delta)
        }
      }
    });
  }

  ngOnInit(): void {
    this.currentValue.set(+(this.inkStore.story().variablesState.$(this.track) || 0));
    this.inkStore.story().ObserveVariable(this.track, (varName, value) => {
      this.currentValue.set(+value);
    })
  }

  increase(delta: number): void {
    this.isIncreasing = true;
    if (delta <= 0) {
      this.isAnimating = false;
      this.isIncreasing = false;
      this.valueDisplayed = this.currentValue();
      return;
    }
    this.currentTimeout = setTimeout(() => {
      const amount = Math.max(1, Math.ceil(delta / 15))
      this.valueDisplayed += amount;
      delta -= amount;
      this.increase(delta);
    }, 50);
  }

  decrease(delta: number): void {
    this.isDecreasing = true;
    if (delta >= 0) {
      this.isAnimating = false;
      this.isDecreasing = false;
      this.valueDisplayed = this.currentValue();
      return;
    }
    this.currentTimeout = setTimeout(() => {
      const amount = Math.max(1, Math.ceil(Math.abs(delta) / 15))
      this.valueDisplayed -= amount;
      delta += amount;
      this.decrease(delta);
    }, 50);
  }
}
