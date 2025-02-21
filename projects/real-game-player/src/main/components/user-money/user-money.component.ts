import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkCounterComponent } from "../../../reader/components/ink-counter/ink-counter.component";

@Component({
  selector: 'app-user-money',
  standalone: true,
  imports: [InkCounterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-money.component.html',
  styleUrl: './user-money.component.scss'
})
export class UserMoneyComponent {

}
