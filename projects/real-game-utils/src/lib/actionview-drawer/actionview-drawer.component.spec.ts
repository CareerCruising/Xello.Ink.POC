/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionviewDrawerComponent } from './actionview-drawer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ActionviewDrawerComponent', () => {
  let component: ActionviewDrawerComponent;
  let fixture: ComponentFixture<ActionviewDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ActionviewDrawerComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionviewDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
