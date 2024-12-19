import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChoiceListComponent } from '../components/choice-list/choice-list.component';
import { InkService } from '../../services/ink.service';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [ CommonModule, ChoiceListComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.scss',
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
export class ReaderComponent {
  constructor(public inkService: InkService) {
    this.inkService.Continue();
  }
}
