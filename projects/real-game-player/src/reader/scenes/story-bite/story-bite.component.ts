import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from "../basic/basic.component";
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';
import { FrameComponent } from '../../components/frame/frame.component';

@Component({
  selector: 'app-story-bite',
  standalone: true,
  imports: [ CommonModule, BasicComponent, SceneIllustratedComponent, FrameComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './story-bite.component.html',
  styleUrl: './story-bite.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class StoryBiteComponent extends BasicComponent implements OnInit {

  illustration: string = '';
  fadeIn = false;
  currentFrame = '';

  ngOnInit(): void {
    this.fadeIn = true;
    this.inkStore.setDelay(0);
    this.inkService.onCommandReceived.subscribe(command => {
      switch (command.name) {
        case 'frame':
          this.currentFrame = command.params[0]
          break;
        case 'illustration':
          this.illustration = command.params[0];
          break;
        default:
          break;
      }
    });
  }
}
