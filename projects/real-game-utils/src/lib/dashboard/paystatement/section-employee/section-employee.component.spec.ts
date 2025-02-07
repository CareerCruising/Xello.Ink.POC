import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SectionEmployeeComponent } from './section-employee.component';

describe('SectionEmployeeComponent', () => {
  let component: SectionEmployeeComponent;
  let fixture: ComponentFixture<SectionEmployeeComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionEmployeeComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(SectionEmployeeComponent);
    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    component.employee = {
      firstName: 'Employee',
      id: '1234567',
      role: 'Activist',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
