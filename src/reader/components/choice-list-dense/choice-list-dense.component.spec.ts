import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceListDenseComponent } from './choice-list-dense.component';

describe('ChoiceListDenseComponent', () => {
  let component: ChoiceListDenseComponent;
  let fixture: ComponentFixture<ChoiceListDenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceListDenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceListDenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
