/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeExpenseTableComponent } from './income-expense-table.component';
import { TranslateModule } from '@ngx-translate/core';

describe('IncomeExpenseTableComponent', () => {
  let component: IncomeExpenseTableComponent;
  let fixture: ComponentFixture<IncomeExpenseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IncomeExpenseTableComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpenseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
