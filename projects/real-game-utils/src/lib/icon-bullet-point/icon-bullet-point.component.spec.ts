/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconBulletPointComponent } from './icon-bullet-point.component';
import { TranslateModule } from '@ngx-translate/core';

describe('IconBulletPointComponent', () => {
  let component: IconBulletPointComponent;
  let fixture: ComponentFixture<IconBulletPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconBulletPointComponent, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBulletPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
