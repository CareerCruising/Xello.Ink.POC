import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LoanBreakdownComponent } from './loan-breakdown.component';

describe('LoanBreakdownComponent', () => {
  let component: LoanBreakdownComponent;
  let fixture: ComponentFixture<LoanBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoanBreakdownComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBreakdownComponent);
    component = fixture.componentInstance;
    component.totalInterestPrincipal = {
      total: 0,
      interest: 0,
      principal: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
