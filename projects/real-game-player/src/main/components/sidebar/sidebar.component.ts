import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { BehaviorSubject } from 'rxjs';
import { MeterComponent } from '../meter/meter.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MeterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {
  background = '';
  isDestroyed$ = new BehaviorSubject<boolean>(false);
  currentXP = 0

  constructor(private inkService: InkService) {
    this.inkService.onCommandReceived.subscribe(cmd => {
      this.background = this.inkService.currentBackground;
    });
    this.currentXP = +(this.inkService.story.variablesState.$('xp') || 0);
    this.inkService.story.ObserveVariable('xp', (variableName, newValue) => {
      this.currentXP = +newValue;
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
