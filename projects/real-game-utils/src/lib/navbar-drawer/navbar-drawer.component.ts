import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-navbar-drawer',
  templateUrl: './navbar-drawer.component.html',
  imports: [],
  styleUrls: ['./navbar-drawer.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarDrawerComponent {
  @Input() isOpen = false;

  @Output() handleClose = new EventEmitter<boolean>();

  @HostListener('document:keydown.escape')
  onEscape(e: any) {
    if (this.isOpen) {
      this.close();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']?.currentValue) {
      document.querySelector('main')?.setAttribute('inert', '');
    } else {
      document.querySelector('main')?.removeAttribute('inert');
    }
  }

  close(): void {
    this.handleClose.emit(true);
  }
}
