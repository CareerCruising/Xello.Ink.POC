import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from '../basic/basic.component';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';

@Component({
  selector: 'app-story-scene',
  standalone: true,
  imports: [ CommonModule, ChoiceListComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './story-scene.component.html',
  styleUrl: './story-scene.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ height: 0, opacity: 0 }),
          animate('0.5s ease-in-out', style({ height: '*', opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class StorySceneComponent extends BasicComponent {

}
