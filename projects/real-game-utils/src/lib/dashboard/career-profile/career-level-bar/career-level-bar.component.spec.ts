import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLevelBarComponent } from './career-level-bar.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CareerLevelBarComponent', () => {
  let component: CareerLevelBarComponent;
  let fixture: ComponentFixture<CareerLevelBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CareerLevelBarComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLevelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
