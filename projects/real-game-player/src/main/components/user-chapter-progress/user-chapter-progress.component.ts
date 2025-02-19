import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { InkStore } from '../../../../store/ink.store';
import { InkList } from 'inkjs';
import { InkListItem } from 'inkjs/engine/InkList';

export interface IGoal {
  key: InkListItem,
  name: string;
  rewards: { xp: number };
}

@Component({
  selector: 'app-user-chapter-progress',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-chapter-progress.component.html',
  styleUrl: './user-chapter-progress.component.scss'
})
export class UserChapterProgressComponent implements OnInit {

  inkStore = inject(InkStore);
  
  goalsCompleted = computed(() => {
    return this.achievedGoals?.Count;
  })

  achievedGoals: null | InkList = null;
  goalsList: IGoal[] = [];
  
  ngOnInit(): void {
    const story = this.inkStore.story();
    const list = story.EvaluateFunction('getGoals') as InkList;
    this.goalsList = list.orderedItems.map((kvp) => {
      return {
        key: kvp.Key,
        name: story.EvaluateFunction('goalName', [ new InkList(kvp) ]),
        rewards: {
          xp: 50
        }
      }
    })
    story.ObserveVariable('achievedGoals', (varName, value) => {
      this.achievedGoals = value;
    })
  }
  
}
