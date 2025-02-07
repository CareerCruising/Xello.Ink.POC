import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardCustomExpenseBackgroundComponent } from '../card-custom-expense-background/card-custom-expense-background.component';

@Component({
  selector: 'lib-card-add-custom-expense',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardCustomExpenseBackgroundComponent],
  templateUrl: './card-add-custom-expense.component.html',
  styleUrl: './card-add-custom-expense.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardAddCustomExpenseComponent {
  @Output() onClickAddCustomExpense = new EventEmitter();
  @Input() description: string;

  constructor(){
    this.description = '';
  }
  
  onClickButton(){
    this.onClickAddCustomExpense.emit();
  }
}
