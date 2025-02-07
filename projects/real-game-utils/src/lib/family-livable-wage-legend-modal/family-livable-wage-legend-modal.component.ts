import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FamilyLivableWageLegendComponent } from '../family-livable-wage-legend/family-livable-wage-legend.component';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'rgs-family-livable-wage-legend-modal',
  standalone: true,
  imports: [TranslateModule, FamilyLivableWageLegendComponent],
  templateUrl: './family-livable-wage-legend-modal.component.html',
  styleUrl: './family-livable-wage-legend-modal.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FamilyLivableWageLegendModalComponent {
  modalService = inject(ModalService);
  @ViewChild('livableWageLegendMobilePopover') popover!: ElementRef;

  closeModal() {
    this.modalService.close();
  }
  openPopover() {
    const popover: any = this.popover.nativeElement;
    popover.isOpen ? popover.close() : popover.open();
  }
}
