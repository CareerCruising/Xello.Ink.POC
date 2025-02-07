import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { ModalService, Options } from '../modal.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('FadeInOut', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition('open => closed', [
        style({
          opacity: 1,
        }),
        animate('350ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class BaseModalComponent {
  @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;
  options!: Options | undefined;
  isOpen = true;

  constructor(
    private modalService: ModalService,
    private element: ElementRef
  ) {}

  onClose() {
    this.modalService.close();
  }

  ngAfterViewInit() {
    this.options = this.modalService.options;
  }

  close() {
    this.isOpen = false;
    setTimeout(() => {
      this.modalService.options = undefined;
      this.element.nativeElement.remove();
    }, 300);
  }
}
