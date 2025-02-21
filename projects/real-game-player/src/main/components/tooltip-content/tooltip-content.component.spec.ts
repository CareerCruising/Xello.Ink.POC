import { ComponentFixture, tick, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TooltipContentComponent } from './tooltip-content.component';
import { configureTestSuite } from '@src/shared/helpers/reset-testbed-helper.spec';
import { VoiceoverDirective } from '@src/shared/directives/voiceover.directive';
import { VoiceoverService } from '@src/shared/services/voiceover.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  template: `
    <div class="outer-element">
      <div style="height: 100px"></div>
      <div style="padding: 0 20px;">
        <a>Bound to...</a>
      </div>
      <div style="height: 120px"></div>
    </div>
    <tooltip-content></tooltip-content>
  `
})
class DummyComponent {
  @ViewChild(TooltipContentComponent, {static: true}) tooltip: TooltipContentComponent;

  constructor() {}
}

describe('TooltipContentComponent', () => {
  let component: TooltipContentComponent;
  let fixture: ComponentFixture<DummyComponent>;

  configureTestSuite();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        HttpClientModule
      ],
      providers: [
        VoiceoverService
      ],
      declarations: [
        DummyComponent
      ]
    })
    .compileComponents();
  }));

  describe('standard', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DummyComponent);
      component = fixture.componentInstance.tooltip;
      component.tooltip = {
        id: '0',
        ref: new ElementRef(fixture.nativeElement.querySelector('a')),
        bindRef: null,
        content: '<p>body<p>',
        color: '#ff0000'
      };
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(component.tooltip.ref).not.toBeNull();
      expect(component.tooltip.bindRef).toBeNull();
    });

    it('should contain the proper content', waitForAsync(() => {
      expect(component.element.nativeElement.innerHTML).toContain('<p>body</p>');
      expect(fixture.nativeElement.querySelector('p')).not.toBeNull();
    }));

    /*
    // Not available with jsdom
    it('should set the top and left styles', async(() => {
      fixture.whenStable().then(() => {
        const bounds = fixture.nativeElement.querySelector('a').getBoundingClientRect();
        const tooltipBounds = fixture.nativeElement.querySelector('.tooltip-wrapper').getBoundingClientRect();
        console.log(tooltipBounds);
        const top = +(component.element.nativeElement.style.top.replace('px', ''));
        const left = +(component.element.nativeElement.style.left.replace('px', ''));
        expect(Math.round(top)).toBe(Math.round(tooltipBounds.top));
        expect(Math.round(top)).toBe(Math.round(bounds.bottom + component['offset'][1]));
        expect(Math.round(left)).toBe(tooltipBounds.left);
      });
    }));
    */

    it('should emit close event when X is clicked', fakeAsync(() => {
      jest.spyOn(component.close, 'emit').mockImplementation(() => {});
      const closeBtn = fixture.nativeElement.querySelector('.close-btn');
      expect(closeBtn).not.toBeNull();
      closeBtn.click();
      tick();
      expect(component.close.emit).toHaveBeenCalled();
    }));
  });
  describe('bound', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(DummyComponent);
      component = fixture.componentInstance.tooltip;
      component.tooltip = {
        id: '0',
        ref: new ElementRef(fixture.nativeElement.querySelector('a')),
        bindRef: fixture.nativeElement.querySelector('.outer-element'),
        content: '<p>body<p>',
        color: '#dddddd'
      };
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
      expect(component.tooltip.ref).not.toBeNull();
      expect(component.tooltip.bindRef).not.toBeNull();
    });

    /*
    // Not available with jsdom
    it('outer-element and link should have distinct positions and sizes', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const bounds = fixture.nativeElement.querySelector('a').getBoundingClientRect();
        const outerBounds = fixture.nativeElement.querySelector('.outer-element').getBoundingClientRect();
        expect(bounds.x).not.toEqual(outerBounds.x);
        expect(bounds.y).not.toEqual(outerBounds.y);
        expect(bounds.width).not.toEqual(outerBounds.width);
        expect(bounds.height).not.toEqual(outerBounds.height);
      });
    }));

    it('should set the top and left styles', async(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const otherBounds = fixture.nativeElement.querySelector('.outer-element').getBoundingClientRect();
        const bounds = fixture.nativeElement.querySelector('a').getBoundingClientRect();
        const tooltipBounds = fixture.nativeElement.querySelector('.tooltip-wrapper').getBoundingClientRect();
        const top = +(component.element.nativeElement.style.top.replace('px', ''));
        const left = +(component.element.nativeElement.style.left.replace('px', ''));
        const width = +(component.element.nativeElement.style.width.replace('px', ''));
        expect(Math.round(top)).toBe(Math.round(tooltipBounds.top));
        expect(Math.round(top)).toBe(Math.round(bounds.bottom + component['offset'][1]));
        expect(Math.round(left)).toBe(tooltipBounds.left);
        expect(Math.round(width)).toBe(otherBounds.width);
      });
    }));
    */
  });
});
