import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { UserStore } from '../../../../store/user.store';

@Component({
  selector: 'app-employee-id',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-id.component.html',
  styleUrl: './employee-id.component.scss'
})
export class EmployeeIdComponent {
  userStore = inject(UserStore);
}
