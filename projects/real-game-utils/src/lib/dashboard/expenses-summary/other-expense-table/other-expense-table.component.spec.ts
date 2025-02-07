import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherExpenseTableComponent } from './other-expense-table.component';
import { TranslateModule } from '@ngx-translate/core';

describe('OtherExpenseTableComponent', () => {
  let component: OtherExpenseTableComponent;
  let fixture: ComponentFixture<OtherExpenseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherExpenseTableComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherExpenseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
