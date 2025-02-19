import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserBasicInfoComponent } from "../user-basic-info/user-basic-info.component";
import { UserWellbeingComponent } from "../user-wellbeing/user-wellbeing.component";
import { UserChapterProgressComponent } from "../user-chapter-progress/user-chapter-progress.component";
import { InkStore } from '../../../../store/ink.store';
import { CommonModule } from '@angular/common';
import { InkListItem } from 'inkjs/engine/InkList';
import { UserAspirationComponent } from '../user-aspiration/user-aspiration.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    UserBasicInfoComponent,
    UserWellbeingComponent,
    UserAspirationComponent,
    UserChapterProgressComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  inkStore = inject(InkStore);
  aspiration: InkListItem | null = null;

  currentBackground = computed(() => {
    return this.inkStore.currentBackground();
  })

  isDestroyed$ = new BehaviorSubject<boolean>(false);

  constructor() {}
  
  ngOnInit(): void {
    this.inkStore.story().ObserveVariable('aspiration', (varName, value: InkListItem) => {
      console.log(value);
      this.aspiration = value;
    })
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
