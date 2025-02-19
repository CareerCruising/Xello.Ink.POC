import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, OnInit } from '@angular/core';
import { Choice } from 'inkjs/engine/Choice';
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-choice-button',
  standalone: true,
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './choice-button.component.html',
  styleUrl: './choice-button.component.scss'
})
export class ChoiceButtonComponent implements OnInit {
  @Input() choice !: Choice;

  illustration !: string;

  inkStore = inject(InkStore);

  ngOnInit() {
    this.choice.tags?.forEach(tag => {
      const tokens = tag.split(':').map(x => x.trim());
      if (tokens.length >= 2) {
        if (tokens[0] === 'illustration') {
          this.illustration = tokens[1];
        }
      }
    });
  }
}
