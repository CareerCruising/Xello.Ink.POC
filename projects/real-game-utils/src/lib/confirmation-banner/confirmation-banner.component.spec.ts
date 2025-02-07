import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBannerComponent } from './confirmation-banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmationBannerComponent', () => {
  let component: ConfirmationBannerComponent;
  let fixture: ComponentFixture<ConfirmationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConfirmationBannerComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
