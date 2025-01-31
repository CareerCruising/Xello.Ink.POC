import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-chapter-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.scss'
})
export class ChapterTitleComponent extends TitleComponent implements OnInit {
  ngOnInit(): void {
    console.log('...')
  }
}
