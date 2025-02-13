import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAspirationComponent } from './user-aspiration.component';

describe('UserAspirationComponent', () => {
  let component: UserAspirationComponent;
  let fixture: ComponentFixture<UserAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAspirationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
