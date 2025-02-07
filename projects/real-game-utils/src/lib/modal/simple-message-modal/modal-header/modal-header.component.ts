import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from '../../modal.service';

@Component({
  standalone: true,
  selector: 'rgs-modal-header',
  imports: [TranslateModule],
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalHeaderComponent {
  modalService = inject(ModalService);
  @Input() header = '';

  @Input() closeButtonAction?: () => {};

  clickCloseButton() {
    if (this.closeButtonAction) {
      this.closeButtonAction();
    } else {
      this.modalService.close();
    }
  }
}
