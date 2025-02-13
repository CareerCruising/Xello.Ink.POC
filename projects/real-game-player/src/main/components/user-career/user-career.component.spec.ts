import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCareerComponent } from './user-career.component';

describe('UserCareerComponent', () => {
  let component: UserCareerComponent;
  let fixture: ComponentFixture<UserCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCareerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
