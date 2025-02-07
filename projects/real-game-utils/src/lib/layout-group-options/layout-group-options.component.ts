import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOptionComponent } from '../card-option/card-option.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardAddCustomExpenseComponent } from '../card-add-custom-expense/card-add-custom-expense.component';
import { CardCustomExpenseComponent } from '../card-custom-expense/card-custom-expense.component';
import { CustomExpense, StandardExpense } from '../types/expenses.types';

@Component({
  selector: 'lib-layout-group-options',
  standalone: true,
  imports: [
    CommonModule,
    CardOptionComponent,
    TranslateModule,
    CardAddCustomExpenseComponent,
    CardCustomExpenseComponent,
  ],
  templateUrl: './layout-group-options.component.html',
  styleUrl: './layout-group-options.component.scss',
})
export class LayoutGroupOptionsComponent {
  @Input() selectable: boolean = true;
  @Input() customOptions: CustomExpense[];
  @Input() options: StandardExpense[];
  @Input() question: string;
  @Output() onSelectOption = new EventEmitter<number>();
  @Output() onSelectCustomExpense = new EventEmitter<number>();
  @Output() onPressAddCustomExpense = new EventEmitter();
  @Output() onPressEditCustomExpense = new EventEmitter<number>();
  @Input() customExpenseDescriptionKey: string;
  @Input() isCategorySavings: boolean = false;
  @Input() imageUrl: string = '/';

  constructor() {
    this.options = [];
    this.customOptions = [];
    this.question = '';
    this.customExpenseDescriptionKey = '';
  }

  onClickOption(option: number) {
    this.onSelectOption.emit(option);
  }

  onClickCustomExpense(option: number) {
    this.onSelectCustomExpense.emit(option);
  }

  onClickEditCustomExpense(option: number) {
    this.onPressEditCustomExpense.emit(option);
  }

  onClickAddCustomExpense() {
    this.onPressAddCustomExpense.emit();
  }
}
