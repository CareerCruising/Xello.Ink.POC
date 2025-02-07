import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PayStatementSummaryComponent } from './pay-statement-summary.component';

describe('PayStatementSummaryComponent', () => {
  let component: PayStatementSummaryComponent;
  let fixture: ComponentFixture<PayStatementSummaryComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PayStatementSummaryComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    translateService.currentLang = 'en-US';
    fixture = TestBed.createComponent(PayStatementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
