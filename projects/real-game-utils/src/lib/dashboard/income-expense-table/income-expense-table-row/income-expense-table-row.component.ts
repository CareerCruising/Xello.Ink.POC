import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'rgs-income-expense-table-row',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './income-expense-table-row.component.html',
  styleUrl: './income-expense-table-row.component.scss',
})
export class IncomeExpenseTableRowComponent {
  @Input() leftText!: string;
  @Input() rightText!: string;
  @Input() dotted: boolean = false;
  @Input() isHighlighted: boolean = false;
  @Input() hover: boolean = true;
  @Input() heapId?: string;
  @Output() onClick = new EventEmitter();

  onClickRow() {
    this.onClick.emit();
  }
}
