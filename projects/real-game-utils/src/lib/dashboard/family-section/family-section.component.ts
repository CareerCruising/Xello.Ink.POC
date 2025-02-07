import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  computed,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';
import {
  FamilyMember,
  familyAvatarColors,
  familyRelationships,
} from '../../types/family.types';
import { FamilyAvatarComponent } from './family-avatar/family-avatar.component';

@Component({
  selector: 'rgs-family-section',
  standalone: true,
  templateUrl: './family-section.component.html',
  styleUrl: './family-section.component.scss',
  imports: [TranslateModule, FamilyAvatarComponent, SlicePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FamilySectionComponent {
  @Input() family!: Signal<FamilyMember[]>;
  @Input() educatorView = false;
  @Input() isAssigned = false;
  @Output() clickFamilyCard = new EventEmitter();
  familyAvatarColors = familyAvatarColors;
  familyRelationships = familyRelationships;
  editHovered: boolean = false;
  readonly editHeapId = 'student-real-game-edit-family-profile';

  mappedFamily = computed(() => {
    const currentFamily = this.family();

    return this.educatorView ? currentFamily : currentFamily.slice(0, 4);
  });

  clickCard() {
    this.clickFamilyCard.emit();
  }
}
