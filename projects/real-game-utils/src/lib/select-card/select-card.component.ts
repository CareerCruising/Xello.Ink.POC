import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DescriptionTextComponent } from './description-text/description-text.component';
import { ShadowedImageComponent } from './shadowed-image/shadowed-image.component';
import { CareerSpecsSmallComponent } from './career-specs-small/career-specs-small.component';
import { CardSelectedIconComponent } from '../card-selected-icon/card-selected-icon.component';
import { SpecsMediumComponent } from './specs-medium/specs-medium.component';

@Component({
  standalone: true,
  selector: 'rgs-select-card',
  imports: [
    TranslateModule,
    DescriptionTextComponent,
    ShadowedImageComponent,
    CareerSpecsSmallComponent,
    CardSelectedIconComponent,
    SpecsMediumComponent,
  ],
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss'],
})
export class SelectCardComponent {
  @Input() shadowedImageUrl = '';
  @Input() shadowedImageAltText = '';

  @Input() title?: string = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() heapId = '';
  @Input() dataTestId = 'selection-card';

  @Input() specsSmall: {
    illustration: string;
    data: string;
    subtitle: string;
  }[] = [];

  @Input() specsMedium: {
    illustration: string;
    data: string;
    subtitle: string;
  }[] = [];

  @Input() selected = false;
  @Input() saved = false;
  @Input() selectable = false;
  @Input() index!: number;
  @Input() id!: string;
  @Input() selectReturn!: any;

  @Output() onSelect = new EventEmitter<any>();
  onClick() {
    this.onSelect.emit(this.selectReturn);
  }
}
