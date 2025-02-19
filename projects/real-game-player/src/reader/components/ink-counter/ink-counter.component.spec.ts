import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkCounterComponent } from './ink-counter.component';

describe('InkCounterComponent', () => {
  let component: InkCounterComponent;
  let fixture: ComponentFixture<InkCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InkCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InkCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
