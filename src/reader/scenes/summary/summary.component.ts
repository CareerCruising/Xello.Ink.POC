import { Component } from '@angular/core';
import { SceneIllustratedComponent } from '../../components/scene-illustrated/scene-illustrated.component';
import { BasicComponent } from '../basic/basic.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SceneIllustratedComponent, BasicComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
