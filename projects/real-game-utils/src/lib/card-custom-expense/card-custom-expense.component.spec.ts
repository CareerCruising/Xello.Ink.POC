import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCustomExpenseComponent } from './card-custom-expense.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CardCustomExpenseComponent', () => {
  let component: CardCustomExpenseComponent;
  let fixture: ComponentFixture<CardCustomExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCustomExpenseComponent, TranslateModule.forRoot()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCustomExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
