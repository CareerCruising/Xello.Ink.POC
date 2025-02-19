import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InkCounterComponent } from "../../../reader/components/ink-counter/ink-counter.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InkCounterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent{

}
