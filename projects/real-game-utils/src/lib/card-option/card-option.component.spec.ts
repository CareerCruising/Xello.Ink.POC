import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionComponent } from './card-option.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CardOptionComponent', () => {
  let component: CardOptionComponent;
  let fixture: ComponentFixture<CardOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOptionComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format percentage correctly', () => {
    component.locale = 'es-US';
    let formattedPercentage = component.formatPercent();
    expect(formattedPercentage).toEqual(' %');
    component.locale = 'fr-CA';
    formattedPercentage = component.formatPercent();
    expect(formattedPercentage).toEqual(' %');
    component.locale = 'en-US';
    formattedPercentage = component.formatPercent();
    expect(formattedPercentage).toEqual('%');
  });
});
