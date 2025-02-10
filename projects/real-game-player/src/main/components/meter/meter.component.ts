import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meter',
  standalone: true,
  imports: [],
  templateUrl: './meter.component.html',
  styleUrl: './meter.component.scss'
})
export class MeterComponent {

  @Input() color = 'green';

}
