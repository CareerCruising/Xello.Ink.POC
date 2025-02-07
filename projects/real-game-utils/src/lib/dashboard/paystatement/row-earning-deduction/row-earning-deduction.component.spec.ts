import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowEarningDeductionComponent } from './row-earning-deduction.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('RowEarningDeductionComponent', () => {
  let component: RowEarningDeductionComponent;
  let fixture: ComponentFixture<RowEarningDeductionComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RowEarningDeductionComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(RowEarningDeductionComponent);
    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
