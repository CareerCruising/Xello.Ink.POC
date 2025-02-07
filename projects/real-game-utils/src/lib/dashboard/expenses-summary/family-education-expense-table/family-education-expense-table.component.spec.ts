import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyEducationExpenseTableComponent } from './family-education-expense-table.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FamilyEducationExpenseTableComponent', () => {
  let component: FamilyEducationExpenseTableComponent;
  let fixture: ComponentFixture<FamilyEducationExpenseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FamilyEducationExpenseTableComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyEducationExpenseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
