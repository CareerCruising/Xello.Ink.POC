import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { InkStore } from '../../../../store/ink.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent implements OnInit {

  inkStore = inject(InkStore);

  money = 0

  ngOnInit(): void {
    this.money = +(this.inkStore.story().variablesState.$('money') || 0);
    this.inkStore.story().ObserveVariable('money', (varName, value) => {
      this.money = +value;
    })
  }

}
