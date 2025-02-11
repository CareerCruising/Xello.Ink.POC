import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBiteIllustratedComponent } from './story-bite-illustrated.component';

describe('StoryBiteIllustratedComponent', () => {
  let component: StoryBiteIllustratedComponent;
  let fixture: ComponentFixture<StoryBiteIllustratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBiteIllustratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryBiteIllustratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
