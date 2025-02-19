import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanceCardResultComponent } from './chance-card-result.component';

describe('ChanceCardResultComponent', () => {
  let component: ChanceCardResultComponent;
  let fixture: ComponentFixture<ChanceCardResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanceCardResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChanceCardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
