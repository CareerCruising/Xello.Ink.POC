import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'rgs-budget-fill-bar',
  templateUrl: './budget-fill-bar.component.html',
  styleUrls: ['./budget-fill-bar.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BudgetFillBarComponent {
  @Input() value = 0;
  @Input() minValue = 0;
  @Input() maxValue = 100;

  get fillWidth(): number {
    return Math.min((this.value / this.maxValue) * 100, 100);
  }
}
