import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutGraphComponent } from './doughnut-graph.component';

describe('DoughnutGraphComponent', () => {
  let component: DoughnutGraphComponent;
  let fixture: ComponentFixture<DoughnutGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DoughnutGraphComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
