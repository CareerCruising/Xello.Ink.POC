import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceButtonComponent } from './choice-button.component';

describe('ChoiceButtonComponent', () => {
  let component: ChoiceButtonComponent;
  let fixture: ComponentFixture<ChoiceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
