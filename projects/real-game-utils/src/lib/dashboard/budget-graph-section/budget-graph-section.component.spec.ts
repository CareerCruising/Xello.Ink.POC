import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetGraphSectionComponent } from './budget-graph-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';

describe('BudgetGraphSectionComponent', () => {
  let component: BudgetGraphSectionComponent;
  let fixture: ComponentFixture<BudgetGraphSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BudgetGraphSectionComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetGraphSectionComponent);
    component = fixture.componentInstance;
    component.currentEducation = signal(null);
    component.familyExpense = signal(0);
    component.familyIncome = signal(0);
    component.currentCareer = signal(null);
    component.totalBudgetCost = signal(0);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
