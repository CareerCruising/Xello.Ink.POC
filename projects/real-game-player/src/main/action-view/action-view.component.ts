import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReaderComponent } from "../../reader/reader.component";

@Component({
  selector: 'app-action-view',
  standalone: true,
  imports: [ReaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './action-view.component.html',
  styleUrl: './action-view.component.scss'
})
export class ActionViewComponent {

}
