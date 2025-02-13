import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChapterProgressComponent } from './user-chapter-progress.component';

describe('UserChapterProgressComponent', () => {
  let component: UserChapterProgressComponent;
  let fixture: ComponentFixture<UserChapterProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChapterProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserChapterProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
