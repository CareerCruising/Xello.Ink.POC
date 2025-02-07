import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCareerComponent } from './card-career.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockBreakpointObserver } from './mock/mock-breakpoint-observer';
import { BreakpointObserver } from '@angular/cdk/layout';

describe('CardCareerComponent', () => {
  let component: CardCareerComponent;
  let translateService: TranslateService;
  let fixture: ComponentFixture<CardCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCareerComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: BreakpointObserver,
          useClass: MockBreakpointObserver,
        },
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(CardCareerComponent);

    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    component.career = {
      careerId: 1,
      isActive: true,
      careerName: 'Account Manager',
      cardImage: 'mock.png',
      profileImage: 'career-1.jpg',
      workHoursPerWeek: 50.0,
      vacationWeeksPerYear: 3.0,
      jobDescription:
        'You work full time as an account manager at a bank. Your job is to assist clients with their financial needs. Some clients need your help filling out loan applications. Others ask you to make investments and monitor their money. You work hard to build strong relationships with clients. They rely on you to stay informed about their financial health.',
      employerName: 'Abundance Bank',
      employerAddress: '416 Currency Avenue',
      salary: [100000],
      grossSalary: [100000],
      monthlyNetSalary: 12,
      monthlyGrossSalary: [12],
      pathways: [{ id: 1, tag: null }],
      credentials: [
        { id: 7, tag: 1, schools: [] },
        { id: 8, tag: null, schools: [] },
        { id: 9, tag: null, schools: [] },
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
