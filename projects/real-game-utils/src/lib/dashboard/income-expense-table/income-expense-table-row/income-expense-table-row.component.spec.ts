import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeExpenseTableRowComponent } from './income-expense-table-row.component';
import { TranslateModule } from '@ngx-translate/core';

describe('IncomeExpenseTableRowComponent', () => {
  let component: IncomeExpenseTableRowComponent;
  let fixture: ComponentFixture<IncomeExpenseTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExpenseTableRowComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
