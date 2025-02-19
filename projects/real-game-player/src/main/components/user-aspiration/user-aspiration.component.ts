import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { InkStore } from '../../../../store/ink.store';
import { InkList, InkListItem } from 'inkjs/engine/InkList';

@Component({
  selector: 'app-user-aspiration',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-aspiration.component.html',
  styleUrl: './user-aspiration.component.scss'
})
export class UserAspirationComponent {

  inkStore = inject(InkStore);

  get illustration() {
    return this.inkStore.story().EvaluateFunction('get_aspiration_illustration', [this.aspiration]);
  }
  aspiration: InkList | null = null

  constructor() {
    this.aspiration = this.inkStore.story().variablesState.$('aspiration') as (InkList | null);
    console.log(this.aspiration);
    this.inkStore.story().ObserveVariable('aspiration', (variableName, newValue: InkList) => {
      this.aspiration = newValue;
      console.log(this.aspiration);
    });
  }

}
