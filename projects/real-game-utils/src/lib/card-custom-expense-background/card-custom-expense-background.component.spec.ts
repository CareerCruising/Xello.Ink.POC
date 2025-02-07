import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCustomExpenseBackgroundComponent } from './card-custom-expense-background.component';

describe('CardCustomExpenseBackgroundComponent', () => {
  let component: CardCustomExpenseBackgroundComponent;
  let fixture: ComponentFixture<CardCustomExpenseBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCustomExpenseBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCustomExpenseBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
