import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayStatementSectionComponent } from './pay-statement-section.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PayStatementSectionComponent', () => {
  let component: PayStatementSectionComponent;
  let fixture: ComponentFixture<PayStatementSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PayStatementSectionComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayStatementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
