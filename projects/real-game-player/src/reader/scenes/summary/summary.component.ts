import { Component, inject, Input, OnInit } from '@angular/core';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';
import { BasicComponent } from '../basic/basic.component';
import { InkService } from '../../../services/ink.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { InkStore } from '../../../../store/ink.store';
import { ReaderContext } from '../../reader-context.enum';
import { FrameComponent } from "../../components/frame/frame.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, SceneIllustratedComponent, BasicComponent, FrameComponent],
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

  @Input() context = ReaderContext.Basic;

  private inkStore = inject(InkStore);

  constructor() {}

  ngOnInit(): void {
    this.inkStore.setDelay(0);
  }

}
