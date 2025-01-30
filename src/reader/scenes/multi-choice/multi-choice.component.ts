import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { BasicComponent } from '../basic/basic.component';
import { ChoiceListDenseComponent } from '../../components/choice-list-dense/choice-list-dense.component';

@Component({
  selector: 'app-multi-choice',
  standalone: true,
  templateUrl: './multi-choice.component.html',
  styleUrl: './multi-choice.component.scss',
  imports: [ CommonModule, ChoiceListDenseComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ height: 0, opacity: 0 }),
          animate('0.5s ease-in-out', style({ height: '*', opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class MultiChoiceComponent extends BasicComponent {
}
