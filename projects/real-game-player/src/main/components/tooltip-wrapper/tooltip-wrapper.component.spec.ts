import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipService } from '@shared/services/tooltip.service';
import { TooltipDefinition } from '@shared/directives/tooltip.directive';
import { TooltipWrapperComponent } from './tooltip-wrapper.component';
import { TooltipContentComponent } from '@shared/components/tooltip-content/tooltip-content.component';
import { configureTestSuite } from '@src/shared/helpers/reset-testbed-helper.spec';
import { VoiceoverDirective } from '@src/shared/directives/voiceover.directive';
import { HttpClientModule } from '@angular/common/http';

describe('TooltipWrapperComponent', () => {
  let component: TooltipWrapperComponent;
  let fixture: ComponentFixture<TooltipWrapperComponent>;
  let service: TooltipService;

  configureTestSuite();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        HttpClientModule
      ],
      declarations: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipWrapperComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TooltipService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a tooltip when one is in the service', waitForAsync(() => {
    service.addTooltip({
      id: '0',
      ref: new ElementRef(fixture.nativeElement),
      mode: 'absolute',
      alignment: 'top',
      bindRef: null,
      content: '<p>body<p>'
    });
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('tooltip-content').length).toEqual(1);
    });
  }));

  it('should display two tooltips when two are in the service', waitForAsync(() => {
    service.tooltips = [{
      id: '0',
      ref: new ElementRef(fixture.nativeElement),
      mode: 'absolute',
      alignment: 'top',
      bindRef: null,
      content: '<p>body<p>'
    }, {
      id: '1',
      ref: new ElementRef(fixture.nativeElement),
      mode: 'absolute',
      alignment: 'top',
      bindRef: null,
      content: '<p>body<p>'
    }];
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('tooltip-content').length).toEqual(2);
    });
  }));
});
