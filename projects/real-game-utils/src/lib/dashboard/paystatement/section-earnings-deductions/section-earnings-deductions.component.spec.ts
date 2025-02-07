import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SectionEarningsDeductionsComponent } from './section-earnings-deductions.component';

describe('SectionEarningsDeductionsComponent', () => {
  let component: SectionEarningsDeductionsComponent;
  let fixture: ComponentFixture<SectionEarningsDeductionsComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionEarningsDeductionsComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(SectionEarningsDeductionsComponent);
    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
