import { Component, computed, inject } from '@angular/core';
import { CareerStore } from '../../../../store/career.store';
import { environment } from '../../../environments/environment';
import { CareerProfileComponent } from "../../../../../real-game-utils/src/lib/dashboard/career-profile/career-profile.component";
import { TranslateModule } from '@ngx-translate/core';
import { UserStore } from '../../../../store/user.store';

@Component({
  selector: 'app-career-profile',
  standalone: true,
  imports: [CareerProfileComponent, TranslateModule],
  templateUrl: './career-profile.component.html',
  styleUrl: './career-profile.component.scss'
})
export class CareerProfileFrameComponent {

  careerStore = inject(CareerStore);
  userStore = inject(UserStore);

  environment = environment;

  constructor() {
    computed(() => {
      console.log(this.careerStore.careerProfile());
    })
  }

}
