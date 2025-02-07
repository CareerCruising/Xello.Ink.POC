import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'straight-progress-bar',
  templateUrl: './straight-progress-bar.component.html',
  styleUrls: ['./straight-progress-bar.component.scss'],
})
export class StraightProgressBarComponent {
  @Input() value = 0;
  @Input() minValue = 0;
  @Input() maxValue = 100;

  get fillWidth(): number {
    return (this.value / this.maxValue) * 100;
  }
}
