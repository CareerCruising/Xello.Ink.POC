import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { InkService } from '../services/ink.service';
import { BasicComponent } from './scenes/basic/basic.component';
import { StoryBiteComponent } from './scenes/story-bite/story-bite.component';
import { StorySceneComponent } from './scenes/story-scene/story-scene.component';
import { TitleComponent } from './scenes/title/title.component';
import { Templates } from '../models/templates.model';
import { MultiChoiceComponent } from './scenes/multi-choice/multi-choice.component';
import { RatingComponent } from './scenes/rating/rating.component';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    BasicComponent,
    TitleComponent,
    StoryBiteComponent,
    StorySceneComponent,
    MultiChoiceComponent,
    RatingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-in-out', style({ height: '*', opacity: 1 })),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ReaderComponent {

  Templates = Templates;

  constructor(public inkService: InkService) {
    if (this.inkService.isInitialized) {
      return;
    }
    if (this.inkService.startingKnot) {
      this.inkService.ChoosePathString(this.inkService.startingKnot);
    }
    this.inkService.Continue();
  }
}
