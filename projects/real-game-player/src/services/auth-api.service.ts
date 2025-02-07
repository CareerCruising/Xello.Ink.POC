import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) {}

  login(endpoint: string, body: any): Promise<any> {
    return this.http.post(`${environment.API_SERVER}/login/${endpoint}`, body).toPromise();
  }

  logout(): Promise<any> {
    return this.http.post(`${environment.API_SERVER}/login/logout`, null).toPromise();
  }
}
