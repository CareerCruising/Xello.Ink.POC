import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic',
  standalone: true,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  imports: [ CommonModule, ChoiceListComponent ],
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
export class BasicComponent {

  constructor(public inkService: InkService) {}
}
