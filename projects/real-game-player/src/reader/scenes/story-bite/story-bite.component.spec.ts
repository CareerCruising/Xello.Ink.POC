import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBiteComponent } from './story-bite.component';

describe('StoryBiteComponent', () => {
  let component: StoryBiteComponent;
  let fixture: ComponentFixture<StoryBiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryBiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
