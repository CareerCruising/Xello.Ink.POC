import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  standalone: true,
  selector: '[highlight]',
})
export class HighlightDirective implements OnChanges {
  @Input('highlight') searchTerm: string = '';
  @Input() caseSensitive = false;
  @Input() customClasses = '';

  @HostBinding('innerHtml')
  @Input()
  content: string = '';
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      if ('searchTerm' in changes || 'caseSensitive' in changes) {
        const text =
          (this.el.nativeElement as HTMLElement).textContent || this.content;
        if (this.searchTerm === '') {
          this.content = text;
        } else {
          const regex = new RegExp(
            this.searchTerm,
            this.caseSensitive ? 'g' : 'gi'
          );
          const newText = text.replace(regex, (match: string) => {
            return `<mark class="bold ${this.customClasses}">${match}</mark>`;
          });
          const sanitzed =
            this.sanitizer.sanitize(SecurityContext.HTML, newText) || '';
          this.content = sanitzed;
        }
      }
    }
  }
}
