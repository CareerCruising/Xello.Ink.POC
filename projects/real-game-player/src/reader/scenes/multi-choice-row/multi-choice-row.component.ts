import { Component } from '@angular/core';
import { MultiChoiceComponent } from '../multi-choice/multi-choice.component';
import { CommonModule } from '@angular/common';
import { ChoiceSelectConfirmComponent } from '../../components/choice-select-confirm/choice-select-confirm.component';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';

@Component({
  selector: 'app-multi-choice-row',
  standalone: true,
  imports: [CommonModule, ChoiceSelectConfirmComponent, SceneIllustratedComponent],
  templateUrl: './multi-choice-row.component.html',
  styleUrl: './multi-choice-row.component.scss'
})
export class MultiChoiceRowComponent extends MultiChoiceComponent {

}
