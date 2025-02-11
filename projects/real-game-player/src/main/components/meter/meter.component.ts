import { Component, Input, OnInit } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meter.component.html',
  styleUrl: './meter.component.scss'
})
export class MeterComponent implements OnInit {

  @Input() watch = '';
  @Input() color = 'green';

  value = 0;
  max = 100;
  isUpdating = false;
  isRising = false;
  isFalling = false;

  get width() {
    if (this.isSwingVariable(this.watch)) {
      return this.getSwingValue(this.watch, this.value) * 50;
    }
    return this.value / this.max * 100;
  }

  constructor(private inkService: InkService) {}

  ngOnInit(): void {
    if (this.watch !== '') {
      const value = this.inkService.story.variablesState.$(this.watch);
      if (value && !isNaN(+value)) {
        this.value = +value;
      }
    
      this.inkService.story.ObserveVariable(this.watch, (variable, newValue) => {
        const isNumber = !isNaN(+newValue)
        if (isNumber) {
          const prev = this.getValue(this.watch, this.value);
          const num = this.getValue(this.watch, +newValue);
          if (prev > num) {
            this.isFalling = true;
            setTimeout(() => {
              this.isFalling = false;
            }, 150)
          } else if (prev < num) {
            this.isRising = true;
            setTimeout(() => {
              this.isRising = false;
            }, 150)
          } else {
            this.isUpdating = true;
            setTimeout(() => {
              this.isUpdating = false;
            }, 150)
          }
        } else {
          this.isUpdating = true;
          setTimeout(() => {
            this.isUpdating = false;
          }, 150)
        }
        this.value = newValue;
      });
    }
  }

  isSwingVariable(variable: string) {
    switch (variable) {
      case 'wellbeing':
      case 'career':
        return true
      default:
        return false;
    }
  }

  getValue(variable: string, value?: number) {
    if (!value) {
      value = this.value;
    }
    if (this.isSwingVariable(this.watch)) {
      return this.getSwingValue(this.watch, value);
    } else {
      return value;
    }
  }

  getSwingValue(variable: string, value: number) {
    const upness = this.inkService.story.EvaluateFunction('upness', [value]);
    const downness = this.inkService.story.EvaluateFunction('downness', [value]);
    return upness / downness;
  }
  
}
