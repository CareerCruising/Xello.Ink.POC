import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { query, trigger, transition, animate, style, group, state } from '@angular/animations';

@Component({
  selector: 'app-chapter-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './chapter-title.component.html',
  styleUrl: './chapter-title.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('visible', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', [
        animate('0.5s ease-in-out'),
      ])
    ]),
    trigger('shiftLeft', [
      state('false', style({ transform: 'translate(0px, -50%) scale(1.8)' })),
      state('true', style({ transform: 'translate(-300px, -50%) scale(1.8)' })),
      transition('false => true', [
        animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'),
      ])
    ])
  ]
})
export class ChapterTitleComponent extends TitleComponent implements OnInit {

  override ngOnInit(): void {
    this.inkService.onCommandReceived.subscribe(command => {
      switch (command.name) {
        case 'illustration':
          this.illustration = command.params[0]
          break;
        default:
          break;
      }
    });
    setTimeout(() => {
      this.showIllustration = true;
    }, 500);
  }

}
