import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetImpactComponent } from './budget-impact.component';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';

describe('BudgetImpactComponent', () => {
  let component: BudgetImpactComponent;
  let fixture: ComponentFixture<BudgetImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BudgetImpactComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetImpactComponent);
    component = fixture.componentInstance;
    component.currentCareer = signal(null);
    component.selectedLoanAmount = signal(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
