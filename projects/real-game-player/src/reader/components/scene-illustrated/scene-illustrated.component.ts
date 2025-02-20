import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { CommonModule } from '@angular/common';
import { FrameComponent } from '../frame/frame.component';

@Component({
  selector: 'app-scene-illustrated',
  standalone: true,
  imports: [CommonModule, FrameComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scene-illustrated.component.html',
  styleUrl: './scene-illustrated.component.scss',
  animations: [
  ]
})
export class SceneIllustratedComponent implements OnInit {

  @Input() alwaysShowLeftPanel = false;
  @Input() showFrames = true;

  illustration: string = '';
  currentFrame: string = '';

  constructor(private inkService: InkService) {}

  ngOnInit(): void {
    this.inkService.onCommandReceived.subscribe(command => {
      switch (command.name) {
        case 'frame':
          this.currentFrame = command.params[0];
          break;
        case 'illustration':
          this.illustration = command.params[0]
          break;
        default:
          break;
      }
    });
  }
}
