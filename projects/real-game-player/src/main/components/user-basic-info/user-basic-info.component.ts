import { Component } from '@angular/core';
import { MeterComponent } from '../meter/meter.component';
import { InkService } from '../../../services/ink.service';

@Component({
  selector: 'app-user-basic-info',
  standalone: true,
  imports: [MeterComponent],
  templateUrl: './user-basic-info.component.html',
  styleUrl: './user-basic-info.component.scss'
})
export class UserBasicInfoComponent {
  currentXP = 0

  constructor(private inkService: InkService) {
    this.currentXP = +(this.inkService.story.variablesState.$('xp') || 0);
    this.inkService.story.ObserveVariable('xp', (variableName, newValue) => {
      this.currentXP = +newValue;
    });
  }
}
