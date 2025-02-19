import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, Input } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './scenes/basic/basic.component';
import { StoryBiteComponent } from './scenes/story-bite/story-bite.component';
import { StorySceneComponent } from './scenes/story-scene/story-scene.component';
import { TitleComponent } from './scenes/title/title.component';
import { Templates } from '../models/templates.model';
import { MultiChoiceComponent } from './scenes/multi-choice/multi-choice.component';
import { RatingComponent } from './scenes/rating/rating.component';
import { ChapterTitleComponent } from './scenes/chapter-title/chapter-title.component';
import { ContentIntroComponent } from './scenes/content-intro/content-intro.component';
import { SummaryComponent } from './scenes/summary/summary.component';
import { StoryBiteIllustratedComponent } from "./scenes/story-bite-illustrated/story-bite-illustrated.component";
import { InkStore } from '../../store/ink.store';
import { ReaderContext } from './reader-context.enum';
import { MultiChoiceRowComponent } from './scenes/multi-choice-row/multi-choice-row.component';
import { ChanceCardComponent } from "./scenes/chance-card/chance-card.component";
import { ChanceCardResultComponent } from './scenes/chance-card-result/chance-card-result.component';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    BasicComponent,
    TitleComponent,
    ContentIntroComponent,
    ChapterTitleComponent,
    SummaryComponent,
    StoryBiteComponent,
    StorySceneComponent,
    MultiChoiceComponent,
    MultiChoiceRowComponent,
    RatingComponent,
    StoryBiteIllustratedComponent,
    ChanceCardComponent,
    ChanceCardResultComponent
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

  @Input() context: ReaderContext = ReaderContext.Basic;

  inkStore = inject(InkStore);

  allowProgress = computed(() => {
    if (this.context == 'action-view') {
      return true;
    }
    return !this.inkStore.isActionViewOpen();
  })

  Templates = Templates;

  constructor() {}
}
