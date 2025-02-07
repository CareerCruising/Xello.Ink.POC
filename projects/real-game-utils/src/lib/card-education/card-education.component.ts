import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { CardSelectedIconComponent } from '../card-selected-icon/card-selected-icon.component';
import { CardEducationType, CareerEducation } from '../types/education.types';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-card-education',
  standalone: true,
  imports: [CardSelectedIconComponent, TranslateModule],
  templateUrl: './card-education.component.html',
  styleUrl: './card-education.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardEducationComponent {
  @Input() selected: boolean = false;
  @Input() item?: CareerEducation;
  @Input() selectedPathway!: CareerEducation;
  @Input() type: CardEducationType = CardEducationType.PATHWAY;
  @Output() onSelect = new EventEmitter<number>();
  @Output() onCreateNew = new EventEmitter();
  @Input() custom: boolean = false;

  onClick() {
    if (!this.custom) {
      this.onSelect.emit(this.item?.id || 0);
    } else {
      this.onCreateNew.emit();
    }
  }
}
