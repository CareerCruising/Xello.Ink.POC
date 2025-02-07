import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-list-item-add',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './list-item-add.component.html',
  styleUrl: './list-item-add.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListItemAddComponent {
  @Input() text!: string;
  @Input() hideButton: boolean = false;
  @Output() addClicked = new EventEmitter();

  iconAddColor = 'black-500';

  clickAdd(e: any) {
    this.addClicked.emit();
  }
}
