import { Injectable, Injector } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user.model';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly STORAGE_KEYS = { token: 'token', sessionId: 'sessionId' };

  readonly PROFILE_ROUTE = 'profile';

  constructor(private injector: Injector, private http: HttpClient) {}

  getUserProfile(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(`${environment.API_SERVER}/profile`);
  }

  getUserData(user?: AuthenticatedUser): Observable<AuthenticatedUser | null> {
    const token = user?.token || localStorage.getItem(this.STORAGE_KEYS.token);

    if (token) {
      if (user && user.userName && user.token) {
        // We have a token and user profile data
        return of(user);
      } else {
        // We have a token, but no user profile data, so fetch it
        return this.getUserProfile().pipe(
          map((profile: any) => {
            return Object.assign({}, { ...user}, { ...profile });
          })
        );
      }
    } else {
      // We don't have a token
      return of(null);
    }
  }
}
