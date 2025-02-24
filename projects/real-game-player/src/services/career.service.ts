import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import {
  Career
} from '@careercruising/real-game-utils';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService
  ) {}

  locale = this.translateService.currentLang;

  allCareersURL = `${environment.CDN_ABSOLUTE_URL}real-game/${this.locale || 'en-US'}/trg_careers_${this.locale || 'en-US'}.json`;
  getAllCareers(): Observable<Career[]> {
    return this.httpClient
      .get(this.allCareersURL, {
        headers: {},
      })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error, caught) => {
          return of([]);
        })
      );
  }

  getCareerProfile(careerId: number): Observable<Career> {
    return this.httpClient
      .get(
        `${environment.CDN_ABSOLUTE_URL}real-game/en-US/${careerId}_trg_careerprofile_en-US.json`,
      )
      .pipe(
        catchError((err) => {
          return of('')
        }),
        map((res: any) => {
          return res;
        })
      );
  }

}
