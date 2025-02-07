import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySceneComponent } from './story-scene.component';

describe('StorySceneComponent', () => {
  let component: StorySceneComponent;
  let fixture: ComponentFixture<StorySceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySceneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
