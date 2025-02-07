import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionCompanyComponent } from './section-company.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('SectionCompanyComponent', () => {
  let component: SectionCompanyComponent;
  let fixture: ComponentFixture<SectionCompanyComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionCompanyComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(SectionCompanyComponent);
    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    component.company = { name: '', address: '' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
