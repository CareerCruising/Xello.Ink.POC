import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerProfileComponent } from './career-profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { signal } from '@angular/core';

describe('careerProfileComponent', () => {
  let component: CareerProfileComponent;
  let fixture: ComponentFixture<CareerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerProfileComponent, TranslateModule.forRoot()],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerProfileComponent);
    component = fixture.componentInstance;
    component.environment = { imageUrl: '' };
    component.currentCareer = signal(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click event', () => {
    const navigateSpy = jest.spyOn(component.clickCareerCard, 'emit');

    component.clickCard();

    expect(navigateSpy).toHaveBeenCalled();
  });
});
