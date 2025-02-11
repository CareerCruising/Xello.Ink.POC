import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from "../basic/basic.component";
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-story-bite-illustrated',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './story-bite-illustrated.component.html',
  styleUrl: './story-bite-illustrated.component.scss',
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
  export class StoryBiteIllustratedComponent extends TitleComponent implements OnInit {
  
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
  
