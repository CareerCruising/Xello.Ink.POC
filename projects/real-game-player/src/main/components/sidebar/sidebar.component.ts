import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserBasicInfoComponent } from "../user-basic-info/user-basic-info.component";
import { UserWellbeingComponent } from "../user-wellbeing/user-wellbeing.component";
import { UserChapterProgressComponent } from "../user-chapter-progress/user-chapter-progress.component";
import { InkStore } from '../../../../store/ink.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
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

  currentBackground = computed(() => {
    console.log(this.inkStore.currentBackground);
    return this.inkStore.currentBackground;
  })

  isDestroyed$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
