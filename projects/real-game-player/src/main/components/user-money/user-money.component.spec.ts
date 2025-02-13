import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoneyComponent } from './user-money.component';

describe('UserMoneyComponent', () => {
  let component: UserMoneyComponent;
  let fixture: ComponentFixture<UserMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
