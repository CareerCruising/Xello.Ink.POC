import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CardSelectedIconComponent } from '../../../card-selected-icon/card-selected-icon.component';

@Component({
  standalone: true,
  selector: 'rgs-family-avatar',
  templateUrl: './family-avatar.component.html',
  styleUrls: ['./family-avatar.component.scss'],
  imports: [CardSelectedIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FamilyAvatarComponent {
  @Input() color: string = 'emerald';
  @Input() outline: 'PERSON' | 'PET' = 'PERSON';
  @Input() size: 'xsm' | 'sm' | 'md' | 'lg' = 'lg';
  @Input() selectable = false;
  @Input() selected = false;

  getDarkColor() {
    return `--darkColor:var(--taco-color-${this.color}-500);`;
  }

  getLightColor() {
    return `--lightColor:var(--taco-color-${this.color}-100);`;
  }
}
