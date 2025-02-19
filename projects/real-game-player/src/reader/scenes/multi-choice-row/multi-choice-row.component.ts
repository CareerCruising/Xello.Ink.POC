import { Component } from '@angular/core';
import { MultiChoiceComponent } from '../multi-choice/multi-choice.component';
import { CommonModule } from '@angular/common';
import { ChoiceSelectConfirmComponent } from '../../components/choice-select-confirm/choice-select-confirm.component';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-multi-choice-row',
  standalone: true,
  imports: [CommonModule, ChoiceSelectConfirmComponent, SceneIllustratedComponent],
  templateUrl: './multi-choice-row.component.html',
  styleUrl: './multi-choice-row.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MultiChoiceRowComponent extends MultiChoiceComponent {

}
