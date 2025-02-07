import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'lib-layout-with-left-navbar',
  templateUrl: './layout-with-left-navbar.component.html',
  styleUrls: ['./layout-with-left-navbar.component.scss'],
  imports: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutWithLeftNavbarComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
