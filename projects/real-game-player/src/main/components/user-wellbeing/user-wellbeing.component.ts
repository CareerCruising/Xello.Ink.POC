import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MeterComponent } from "../meter/meter.component";

@Component({
  selector: 'app-user-wellbeing',
  standalone: true,
  imports: [MeterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-wellbeing.component.html',
  styleUrl: './user-wellbeing.component.scss'
})
export class UserWellbeingComponent {

}
