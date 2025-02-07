import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  HostListener,
  Input,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconButtonComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) size!: string;
  @Input({ required: true }) defaultFill!: string;
  @Input({ required: true }) hoverFill!: string;

  @Output() clicked = new EventEmitter<void>();

  fillColor = signal(this.defaultFill);

  @HostListener('mouseenter') onMouseEnter() {
    this.fillColor.set(this.hoverFill);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fillColor.set(this.defaultFill);
  }

  @HostListener('click') onClick() {
    this.clicked.emit();
  }

  @HostListener('keydown.enter') onEnterPress() {
    this.clicked.emit();
  }
}
