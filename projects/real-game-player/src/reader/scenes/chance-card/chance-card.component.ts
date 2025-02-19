import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { InkStore } from '../../../../store/ink.store';
import { CommonModule } from '@angular/common';
import { InkService } from '../../../services/ink.service';
import { Choice } from 'inkjs/engine/Choice';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-chance-card',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chance-card.component.html',
  styleUrl: './chance-card.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ChanceCardComponent {

  inkStore = inject(InkStore);

  constructor(public inkService: InkService) {
    this.inkStore.setDelay(0);
  }

  selectChoice(choice: any) {
    return this.inkService.SelectChoice(choice);
  }

}
