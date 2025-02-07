import { animate, style, transition, trigger } from '@angular/animations';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-confirmation-banner',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './confirmation-banner.component.html',
  styleUrl: './confirmation-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms ease-in-out', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class ConfirmationBannerComponent {
  @Input() message: string = '';
  @Output() onClickCloseBanner = new EventEmitter();

  private _visible: boolean = false;

  @Input() set visible(value: boolean) {
    this._visible = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  onClick() {
    this.onClickCloseBanner.emit();
  }
}
