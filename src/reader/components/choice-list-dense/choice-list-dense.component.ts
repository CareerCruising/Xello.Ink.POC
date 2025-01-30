import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChoiceListComponent } from '../choice-list/choice-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choice-list-dense',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './choice-list-dense.component.html',
  styleUrl: './choice-list-dense.component.scss'
})
export class ChoiceListDenseComponent extends ChoiceListComponent {

}
