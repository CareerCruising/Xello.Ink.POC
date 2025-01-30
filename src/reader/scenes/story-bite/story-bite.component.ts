import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from "../basic/basic.component";
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-story-bite',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './story-bite.component.html',
  styleUrl: './story-bite.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class StoryBiteComponent extends BasicComponent implements OnInit {

  illustration: string = '';

  ngOnInit(): void {
    this.inkService.delay = 0;
    this.inkService.onCommandReceived.subscribe(command => {
      switch (command.name) {
        case 'illustration':
          this.illustration = command.params[0];
          break;
        default:
          break;
      }
    });
  }
}
