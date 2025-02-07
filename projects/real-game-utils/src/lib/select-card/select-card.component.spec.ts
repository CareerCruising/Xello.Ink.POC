/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCardComponent } from './select-card.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SelectCardComponent', () => {
  let component: SelectCardComponent;
  let fixture: ComponentFixture<SelectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SelectCardComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
