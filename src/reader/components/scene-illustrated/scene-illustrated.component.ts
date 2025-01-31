import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scene-illustrated',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scene-illustrated.component.html',
  styleUrl: './scene-illustrated.component.scss',
  animations: [
  ]
})
export class SceneIllustratedComponent implements OnInit {

  illustration: string = '';

  constructor(private inkService: InkService) {}

  ngOnInit(): void {
    this.inkService.onCommandReceived.subscribe(command => {
      switch (command.name) {
        case 'illustration':
          this.illustration = command.params[0]
          break;
        default:
          break;
      }
    });
  }
}
