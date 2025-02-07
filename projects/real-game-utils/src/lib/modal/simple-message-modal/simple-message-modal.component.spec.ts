/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMessageModalComponent } from './simple-message-modal.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SimpleMessageModalComponent', () => {
  let component: SimpleMessageModalComponent;
  let fixture: ComponentFixture<SimpleMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SimpleMessageModalComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
