import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, ElementRef, EventEmitter, OnInit, AfterViewInit, Output, Renderer2, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class TooltipContentComponent implements OnInit, AfterViewInit {
  @Input() tooltip: any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  content !: string;
  ref !: ElementRef;

  isSticky = false;

  private defaultOrientation = 'bottom';
  public orientation !: string;
  private offset = [0, 12];
  color = '#333333';

  constructor(public element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.tooltip) {
      this.tooltip.eRef = this.element;                     // Bind the element to the tooltip, so that the directive can handle it.
      this.content = this.tooltip.content;
      this.ref = this.tooltip.ref;

      const otherElm = this.tooltip.bindRef || this.ref.nativeElement;
      this.renderer.appendChild(otherElm, this.element.nativeElement);
    }
  }
  ngAfterViewInit(): void {
    // position based on `ref`
    setTimeout(this.position.bind(this));
  }
  @HostListener('window:scroll') onWindowScroll(): void {
    this.position();
  }
  @HostListener('window:resize') onWindowResize(): void {
    this.position();
  }

  onClose(): void {
    this.close.emit(this.tooltip.id);
  }

  position(): void {
    if (!this.tooltip) {
      return;
    }
    const caret = this.element.nativeElement.querySelector('.caret');
    if (!this.tooltip) { return; }
    this.orientation = this.tooltip.alignment || this.defaultOrientation;

    const nativeElm = this.element.nativeElement;
    const otherElm = this.tooltip.bindRef || this.ref.nativeElement;

    const hotspotBounds = this.ref.nativeElement.getBoundingClientRect();

    const bounds = otherElm.getBoundingClientRect();
    let top = bounds.top;
    let left = bounds.left;

    const offset = this.offset;

    if (bounds.width > 200) {
      this.renderer.setStyle(nativeElm, 'width', `${bounds.width}px`);
    }

    const nativeElmBounds = nativeElm.getBoundingClientRect();
    const caretOffset = hotspotBounds.left === bounds.left
      ? nativeElmBounds.width / 2 - 12
      : hotspotBounds.left - bounds.left + hotspotBounds.width / 2 - 12;

    // Dealing with elements close to the edges

    let ttposition = 0;
    let caretPosition =  0;
    const isOffBounds = (window.innerWidth < (bounds.left + nativeElmBounds.width + 80));

    if (isOffBounds) {
      ttposition = window.innerWidth - nativeElmBounds.width - 20 - 80;
      caretPosition = caretOffset + (hotspotBounds.left - ttposition + 19 - nativeElmBounds.width / 2 - 80);
    } else {
      ttposition = left;
      caretPosition = caretOffset;
    }

    // ...

    if (this.orientation === 'top') {
      top = hotspotBounds.top - nativeElmBounds.height - offset[1];

      if (top < 0) {
        this.orientation = 'bottom';
        top = hotspotBounds.top + hotspotBounds.height + offset[1];
        if (this.isSticky && top < offset[1]) {
          top = offset[1];
        }
      } else if (this.isSticky && top + nativeElmBounds.height + offset[1] > window.innerHeight) {
        top = window.innerHeight - nativeElmBounds.height - offset[1];
      }
    }
    if (this.orientation === 'bottom') {
      top = hotspotBounds.top + hotspotBounds.height + offset[1];

      if (top + nativeElmBounds.height > window.innerHeight) {
        this.orientation = 'top';
        top = hotspotBounds.top - nativeElmBounds.height - offset[1];
        if (this.isSticky && top > window.innerHeight - nativeElmBounds.height - offset[1]) {
          top = window.innerHeight - nativeElmBounds.height - offset[1];
        }
      } else if (this.isSticky && top < offset[1]) {
        top = offset[1];
      }
    }

    let parent = this.ref.nativeElement.offsetParent;
    // If there is a parent with a transform on it, offset the tooltip.
    while (parent !== null) {
      const transform = window.getComputedStyle(parent).transform;
      if (transform && transform !== 'none') {
        ttposition -= parent.getBoundingClientRect().left;
        top -= parent.getBoundingClientRect().top;
        // break;
      }
      parent = parent.offsetParent;
    }

    this.renderer.setStyle(nativeElm, 'transform', `translate3D(${ttposition}px, ${this.tooltip.mode === 'fixed' ? 90 : top}px, 0)`);
    this.renderer.setStyle(caret, 'left', `${caretPosition}px`);
  }

}
