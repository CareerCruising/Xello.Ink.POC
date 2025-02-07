/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsMediumComponent } from './specs-medium.component';

describe('SpecsMediumComponent', () => {
  let component: SpecsMediumComponent;
  let fixture: ComponentFixture<SpecsMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SpecsMediumComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
