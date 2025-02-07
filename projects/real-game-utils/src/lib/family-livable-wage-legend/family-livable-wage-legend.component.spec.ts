import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLivableWageLegendComponent } from './family-livable-wage-legend.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('FamilyExpenseTableComponent', () => {
  let component: FamilyLivableWageLegendComponent;
  let fixture: ComponentFixture<FamilyLivableWageLegendComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FamilyLivableWageLegendComponent,
        TranslateModule.forRoot(),
        HttpClientModule,
      ],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    translateService.currentLang = 'en-US';
    fixture = TestBed.createComponent(FamilyLivableWageLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct locale', () => {
    expect(component.locale).toBe('en-US');
  });
});
