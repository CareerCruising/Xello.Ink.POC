import { animate, query, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { Choice } from 'inkjs/engine/Choice';
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-choice-list',
  standalone: true,
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './choice-list.component.html',
  styleUrl: './choice-list.component.scss',
  animations: [
    trigger('choices', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('0.5s ease-in-out', style({ opacity: 1 }))  
        ], { optional: true })
      ])
    ]),
  ]
})
export class ChoiceListComponent {
  @Input() choices: Choice[] = [];
  @Input() allowConfirm = true;

  @Output() handleSelect = new EventEmitter<Choice>();
  @Output() handleChoice = new EventEmitter<Choice>();

  inkStore = inject(InkStore);

  selectChoice(choice: Choice) {
    this.inkStore.selectChoice(choice);
  }

  confirmChoice() {
    const _selectedChoice = this.inkStore.selectedChoice();
    if (!_selectedChoice || !this.allowConfirm) { return; }
    this.handleChoice.emit(_selectedChoice);
  }
}
