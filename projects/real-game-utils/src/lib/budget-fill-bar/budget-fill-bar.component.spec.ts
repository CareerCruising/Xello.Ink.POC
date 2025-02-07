import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetFillBarComponent } from './budget-fill-bar.component';

describe('BudgetFillBarComponent', () => {
  let component: BudgetFillBarComponent;
  let fixture: ComponentFixture<BudgetFillBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BudgetFillBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
