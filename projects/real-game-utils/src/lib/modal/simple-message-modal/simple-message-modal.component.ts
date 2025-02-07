import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
} from '@angular/core';
import { ModalService } from '../modal.service';
import { TranslateModule } from '@ngx-translate/core';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@Component({
  standalone: true,
  selector: 'rgs-simple-message-modal',
  templateUrl: './simple-message-modal.component.html',
  imports: [TranslateModule, ModalHeaderComponent, ModalFooterComponent],
  styleUrls: ['./simple-message-modal.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SimpleMessageModalComponent {
  modalService = inject(ModalService);
  @Input() header = '';
  @Input() bodyText = '';
  @Input() primaryButtonText = '';
  @Input() primaryButtonHeapId = '';
  @Input() primaryButtonAction?: () => {};
  @Input() secondaryButtonText = '';
  @Input() secondaryButtonHeapId = '';
  @Input() secondaryButtonAction?: () => {};
}
