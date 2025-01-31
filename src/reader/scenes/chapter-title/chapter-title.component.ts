import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: '../title/title.component.html',
  styleUrl: './chapter-title.component.scss'
})
export class ChapterTitleComponent extends TitleComponent {

}
