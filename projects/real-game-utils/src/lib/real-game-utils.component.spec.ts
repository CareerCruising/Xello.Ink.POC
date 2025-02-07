import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealGameUtilsComponent } from './real-game-utils.component';

describe('RealGameUtilsComponent', () => {
  let component: RealGameUtilsComponent;
  let fixture: ComponentFixture<RealGameUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealGameUtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealGameUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
