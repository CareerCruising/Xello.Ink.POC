import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from '../basic/basic.component';
import { ChoiceListComponent } from '../../components/choice-list/choice-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  constructor(public inkService: InkService) {}

}
