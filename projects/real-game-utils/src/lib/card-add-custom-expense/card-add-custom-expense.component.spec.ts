import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAddCustomExpenseComponent } from './card-add-custom-expense.component';
import { TranslateModule } from '@ngx-translate/core';

describe('CardAddCustomExpenseComponent', () => {
  let component: CardAddCustomExpenseComponent;
  let fixture: ComponentFixture<CardAddCustomExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAddCustomExpenseComponent, TranslateModule.forRoot()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAddCustomExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
