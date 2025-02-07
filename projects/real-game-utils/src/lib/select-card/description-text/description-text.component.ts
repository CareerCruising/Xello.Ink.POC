import { BreakpointObserver } from '@angular/cdk/layout';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  signal,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'rgs-description-text',
  templateUrl: './description-text.component.html',
  styleUrls: ['./description-text.component.scss'],
  imports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DescriptionTextComponent {
  @Input() text = '';
  expanded = signal<boolean>(false);
  showReadMore = signal<boolean>(false);
  isMobile = signal(true);
  truncatedText: string = '';
  @ViewChild('descriptionCard') descriptionCard: ElementRef | undefined;
  @ViewChild('descriptionText') descriptionText: ElementRef | undefined;

  LINE_HEIGHT = 16;
  MAX_DESCRIPTION_SIZE = this.LINE_HEIGHT * 3 + this.LINE_HEIGHT * 0.5;
  private subscriptions = new Subscription();

  constructor(
    private translateService: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private element: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.subscriptions.add(
      this.breakpointObserver
        .observe('(max-width: 767px)')
        .subscribe((state) => {
          this.isMobile.set(state.matches);
          this.setExpandAndTruncate();
        })
    );
    this.onResize();
    setTimeout(() => {
      this.setExpandAndTruncate();
    }, 300);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:resize')
  onResize() {
    setTimeout(() => {
      this.setExpandAndTruncate();
    });
  }

  setExpandAndTruncate() {
    this.showReadMore.set(this.shouldShowReadMore(this.isMobile()));
    this.expanded.set(this.shouldExpand(this.isMobile()));
    setTimeout(() => {
      this.truncate(
        this.text,
        this.showReadMore() ? this.MAX_DESCRIPTION_SIZE : 500
      );
    });
  }

  shouldExpand(mobileView: boolean): boolean {
    const isEnglish = this.translateService.currentLang
      .toLowerCase()
      .includes('en-');
    return !mobileView && isEnglish;
  }

  shouldShowReadMore(mobileView: boolean): boolean {
    const isEnglish = this.translateService.currentLang
      .toLowerCase()
      .includes('en-');
    const needsTruncation =
      this.getHeight(this.descriptionText?.nativeElement) >
      this.MAX_DESCRIPTION_SIZE;
    return mobileView || (!isEnglish && needsTruncation);
  }

  onClickReadMore(event: any) {
    event.preventDefault();
    event.stopPropagation();
    let element = this.element.nativeElement.querySelector('.description-card');
    element.innerHTML = this.text;
    this.expanded.set(true);
    this.showReadMore.set(false);
  }

  getHeight(elt: HTMLElement): number {
    return elt.scrollHeight;
  }

  // Populate an element with text so as to fit into height
  truncate(content: string, height: number): void {
    if (this.descriptionText) {
      let elt = this.descriptionText.nativeElement;
      elt.innerHTML = content;
      content = this.truncatedText = elt.innerHTML;
      // Shorten word by word
      while (content && this.getHeight(elt) > height) {
        this.truncatedText = this.shorten(content) + '...';
        elt.innerHTML = content = this.truncatedText;
      }
    }
  }

  shorten(str: string, breakCharacter = ' '): string {
    const lastIndex = str.lastIndexOf(breakCharacter);
    str = str.substring(0, lastIndex).trim();
    return str;
  }
}
