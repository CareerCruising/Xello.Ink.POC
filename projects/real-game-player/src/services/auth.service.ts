import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEYS = { token: 'token', sessionId: 'sessionId' };

  constructor(private authApiService: AuthApiService) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEYS.token);
  }

  login(payload: any): Promise<any> {
    const endpoint: string = payload.k ? 'student' : 'local';
    return this.authApiService.login(endpoint, payload).then((res: any) => {
      if (res) {
        localStorage.setItem(this.STORAGE_KEYS.token, res.token);
      }

      return res;
    }).catch(err => { throw err; });
  }

  relogin(model: any): Observable<any> {
    return from(this.authApiService.login('local', model));
  }
}
