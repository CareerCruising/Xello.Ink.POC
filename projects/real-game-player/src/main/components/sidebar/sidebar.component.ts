import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, Inject, OnDestroy } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { BehaviorSubject } from 'rxjs';
import { MeterComponent } from '../meter/meter.component';
import { UserBasicInfoComponent } from "../user-basic-info/user-basic-info.component";
import { UserWellbeingComponent } from "../user-wellbeing/user-wellbeing.component";
import { UserChapterProgressComponent } from "../user-chapter-progress/user-chapter-progress.component";
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    UserBasicInfoComponent,
    UserWellbeingComponent,
    UserChapterProgressComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {
  inkStore = Inject(InkStore);
  isDestroyed$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
