import { animate, query, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { Choice } from 'inkjs/engine/Choice';

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
          style({ height: 0, opacity: 0 }),
          animate('0.5s ease-in-out', style({ height: '*', opacity: 1 }))  
        ], { optional: true })
      ])
    ]),
    trigger('choiceList', [
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
  @Input() mode = 'basic';
  @Input() choices: Choice[] = [];
  @Output() handleChoice = new EventEmitter<Choice>();
}
