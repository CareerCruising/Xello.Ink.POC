import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from '../basic/basic.component';
import { ChoiceListDenseComponent } from '../../components/choice-list-dense/choice-list-dense.component';
import { SceneIllustratedComponent } from "../../components/scene-illustrated/scene-illustrated.component";

@Component({
  selector: 'app-multi-choice',
  standalone: true,
  templateUrl: './multi-choice.component.html',
  styleUrl: './multi-choice.component.scss',
  imports: [CommonModule, ChoiceListDenseComponent, SceneIllustratedComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MultiChoiceComponent extends BasicComponent implements OnInit {

  ngOnInit(): void {
    this.inkService.delay = 0
  }
}
