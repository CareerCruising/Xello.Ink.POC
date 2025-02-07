import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'rgs-tooltip',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input({ required: true }) label !: string;
  
  hovering = false;
  focusing = false;

  openPopover(newState?: boolean) {
    let popover: any = document.querySelector('#' + this.label);
    newState = newState ?? !popover?.isOpen;
    if (newState) {
      popover.open();
    } else {
      popover.close();
    }
    this.open.emit(newState);
  }

  closePopover() {
    this.close.emit();
  }
}
