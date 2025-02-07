import { Component, OnInit } from '@angular/core';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';
import { BasicComponent } from '../basic/basic.component';
import { InkService } from '../../../services/ink.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ CommonModule, SceneIllustratedComponent, BasicComponent ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SummaryComponent implements OnInit {

  constructor(private inkService: InkService) {}

  ngOnInit(): void {
    this.inkService.delay = 0;
  }

}
