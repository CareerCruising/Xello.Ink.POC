import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'rgs-actionview-drawer',
  templateUrl: './actionview-drawer.component.html',
  imports: [TranslateModule],
  styleUrls: ['./actionview-drawer.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActionviewDrawerComponent {
  @Input() heading = '';
  @Input() illustration = '';
  @Input() open = false;

  @Output() handleClose = new EventEmitter<boolean>();

  @HostListener('document:keydown.escape')
  onEscape(e: any) {
    if (this.open) {
      this.close();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']?.currentValue) {
      document.querySelector('taco-actionview')?.setAttribute('inert', '');
    } else {
      document.querySelector('taco-actionview')?.removeAttribute('inert');
    }
  }

  close(): void {
    this.handleClose.emit(true);
  }
}
