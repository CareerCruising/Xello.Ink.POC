import { Component, inject } from '@angular/core';
import { MeterComponent } from '../meter/meter.component';
import { InkService } from '../../../services/ink.service';
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-user-basic-info',
  standalone: true,
  imports: [MeterComponent],
  templateUrl: './user-basic-info.component.html',
  styleUrl: './user-basic-info.component.scss'
})
export class UserBasicInfoComponent {

  inkStore = inject(InkStore);

  currentXP = 0

  constructor() {
    this.currentXP = +(this.inkStore.story().variablesState.$('xp') || 0);
    this.inkStore.story().ObserveVariable('xp', (variableName, newValue) => {
      this.currentXP = +newValue;
    });
  }
}
