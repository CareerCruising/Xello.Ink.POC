import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export interface IGoal {
  name: string;
  rewards: { xp: number };
  isComplete: boolean;
}

@Component({
  selector: 'app-user-chapter-progress',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-chapter-progress.component.html',
  styleUrl: './user-chapter-progress.component.scss'
})
export class UserChapterProgressComponent {
  
  goalsCompleted = computed(() => {
    return this.goalsList.filter(x => x.isComplete).length;
  })

  goalsList: IGoal[] = [
    {
      name: 'Meet Ollex',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'First day of work',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'World of work survey',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'Set an aspiration',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'Find a place to live',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'First payday',
      rewards: { xp: 50 },
      isComplete: false
    },
    {
      name: 'Pay statement challenge',
      rewards: { xp: 50 },
      isComplete: false
    }
  ]
}
