import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Option } from '../types/option.types';
import { FormatCurrencyPipe } from '../helpers/formatCurrency.pipe';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CardCustomExpenseBackgroundComponent } from '../card-custom-expense-background/card-custom-expense-background.component';
import { StopPropagationDirective } from '../directives/stop-propagation.directive';
import { CardSelectedIconComponent } from '../card-selected-icon/card-selected-icon.component';

@Component({
  selector: 'lib-card-custom-expense',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormatCurrencyPipe,
    CardCustomExpenseBackgroundComponent,
    StopPropagationDirective,
    CardSelectedIconComponent,
  ],
  templateUrl: './card-custom-expense.component.html',
  styleUrl: './card-custom-expense.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardCustomExpenseComponent {
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;
  @Input() option!: Option;
  @Input() selected: boolean = false;
  @Output() onSelectOption = new EventEmitter<number>();
  @Output() onClickEdit = new EventEmitter<number>();
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  onClickOption() {
    this.onSelectOption.emit(this.option.customExpenseId);
  }

  onClickEditCustomExpense() {
    this.onClickEdit.emit(this.option.customExpenseId);
  }
}
