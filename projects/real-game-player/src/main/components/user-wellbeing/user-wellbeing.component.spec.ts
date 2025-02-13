import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWellbeingComponent } from './user-wellbeing.component';

describe('UserWellbeingComponent', () => {
  let component: UserWellbeingComponent;
  let fixture: ComponentFixture<UserWellbeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWellbeingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
