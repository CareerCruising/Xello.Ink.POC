import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceRatingComponent } from './choice-rating.component';

describe('ChoiceRatingComponent', () => {
  let component: ChoiceRatingComponent;
  let fixture: ComponentFixture<ChoiceRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
