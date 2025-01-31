import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneIllustratedComponent } from './scene-illustrated.component';

describe('SceneIllustratedComponent', () => {
  let component: SceneIllustratedComponent;
  let fixture: ComponentFixture<SceneIllustratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceneIllustratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SceneIllustratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
