import { Component } from '@angular/core';
import { UserBasicInfoComponent } from "../user-basic-info/user-basic-info.component";
import { UserEducationComponent } from "../user-education/user-education.component";
import { UserCareerComponent } from "../user-career/user-career.component";
import { UserAspirationComponent } from "../user-aspiration/user-aspiration.component";
import { UserWellbeingComponent } from "../user-wellbeing/user-wellbeing.component";
import { UserMoneyComponent } from "../user-money/user-money.component";
import { UserChapterProgressComponent } from "../user-chapter-progress/user-chapter-progress.component";

@Component({
  selector: 'app-chapter-summary',
  standalone: true,
  imports: [
    UserBasicInfoComponent,
    UserEducationComponent,
    UserCareerComponent,
    UserAspirationComponent,
    UserWellbeingComponent,
    UserMoneyComponent,
    UserChapterProgressComponent
  ],
  templateUrl: './chapter-summary.component.html',
  styleUrl: './chapter-summary.component.scss'
})
export class ChapterSummaryComponent {

}
