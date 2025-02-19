import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceRowComponent } from './multi-choice-row.component';

describe('MultiChoiceRowComponent', () => {
  let component: MultiChoiceRowComponent;
  let fixture: ComponentFixture<MultiChoiceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiChoiceRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiChoiceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
