import {
  Component,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormatCurrencyPipe } from '../helpers/formatCurrency.pipe';
import { StandardExpense } from '../types/expenses.types';
import { formatPercent } from '../helpers/formatPercent';
import { CardSelectedIconComponent } from '../card-selected-icon/card-selected-icon.component';

@Component({
  selector: 'lib-card-option',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormatCurrencyPipe,
    CardSelectedIconComponent,
  ],
  templateUrl: './card-option.component.html',
  styleUrl: './card-option.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardOptionComponent {
  translateService = inject(TranslateService);
  locale = this.translateService.currentLang;

  @Input() option!: StandardExpense;
  @Input() imageUrl: string = '/';
  @Input() selectable: boolean = true;
  @Input() selected: boolean = false;
  @Output() onSelectOption = new EventEmitter<number>();

  onClickOption() {
    this.onSelectOption.emit(this.option.expenseOptionId);
  }

  formatPercent() {
    return formatPercent(this.locale);
  }
}
