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
  selector: 'rgs-modal-footer',
  imports: [TranslateModule],
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalFooterComponent {
  modalService = inject(ModalService);
  @Input() primaryButtonText = '';
  @Input() primaryButtonHeapId = '';
  @Input() primaryButtonAction?: () => void;
  @Input() secondaryButtonText = '';
  @Input() secondaryButtonHeapId = '';
  @Input() secondaryButtonAction?: () => void;

  pressPrimaryButton() {
    if (this.primaryButtonAction) {
      this.primaryButtonAction();
    } else {
      this.modalService.close();
    }
  }

  pressSecondaryButton() {
    if (this.secondaryButtonAction) {
      this.secondaryButtonAction();
    } else {
      this.modalService.close();
    }
  }
}
