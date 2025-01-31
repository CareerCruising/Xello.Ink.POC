import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkService } from '../../../services/ink.service';
import { BasicComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, BasicComponent, SceneIllustratedComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  constructor(public inkService: InkService) {}

}
