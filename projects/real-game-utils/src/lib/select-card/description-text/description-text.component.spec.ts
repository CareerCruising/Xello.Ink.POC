import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DescriptionTextComponent } from './description-text.component';
import { MockBreakpointObserver } from '../../card-career/mock/mock-breakpoint-observer';

describe('DescriptionTextComponent', () => {
  let component: DescriptionTextComponent;
  let translateService: TranslateService;
  let fixture: ComponentFixture<DescriptionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionTextComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: BreakpointObserver,
          useClass: MockBreakpointObserver,
        },
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(DescriptionTextComponent);

    translateService.currentLang = 'en-US';
    component = fixture.componentInstance;
    component.text =
      'You work full time as an account manager at a bank. Your job is to assist clients with their financial needs. Some clients need your help filling out loan applications. Others ask you to make investments and monitor their money. You work hard to build strong relationships with clients. They rely on you to stay informed about their financial health.';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Language English', () => {
    it('should show read more button if screen size is mobile', async () => {
      const isMobile = true;
      const shouldShowReadMore = component.shouldShowReadMore(isMobile);
      expect(shouldShowReadMore).toBe(true);
    });

    it('should not show read more button if screen size is desktop', async () => {
      const isMobile = false;
      const shouldShowReadMore = component.shouldShowReadMore(isMobile);
      expect(shouldShowReadMore).toBe(false);
    });
  });

  describe('Language Not English', () => {
    beforeEach(() => {
      translateService = TestBed.inject(TranslateService);
      translateService.currentLang = 'es-US';
      fixture.detectChanges();
    });

    it('should show read more button if screen size is mobile', async () => {
      const isMobile = true;
      const shouldShowReadMore = component.shouldShowReadMore(isMobile);
      expect(shouldShowReadMore).toBe(true);
    });

    it('should show read more button if screen size is desktop', async () => {
      const isMobile = true;
      const shouldShowReadMore = component.shouldShowReadMore(isMobile);
      expect(shouldShowReadMore).toBe(true);
    });
  });
});
