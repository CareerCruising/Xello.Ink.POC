import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceSelectConfirmComponent } from './choice-select-confirm.component';

describe('ChoiceSelectConfirmComponent', () => {
  let component: ChoiceSelectConfirmComponent;
  let fixture: ComponentFixture<ChoiceSelectConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceSelectConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceSelectConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
