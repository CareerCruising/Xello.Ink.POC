import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenHelper {
  TOKEN_KEY = 'token';
  TOKEN_REFRESH_DATE_KEY = 'tokenRefreshDate';
  TOKEN_EXPIRY_DATE_KEY = 'tokenExpiryDate';
  isRefreshing: boolean = false;

  constructor() {}

  getExpiryDate(expochString: string | null): number | null {
    if (expochString) {
      return parseInt(expochString);
    }
    return null;
  }

  isTokenValid() {
    return this.getToken() !== null && !this.isTokenExpired();
  }

  isTokenExpired() {
    const tokenExpiryDate = localStorage.getItem(this.TOKEN_EXPIRY_DATE_KEY);
    const expiryDate = this.getExpiryDate(tokenExpiryDate);
    return !expiryDate || Date.now() > expiryDate;
  }

  parseTokenExpiryDate(token: string): string {
    const jwtData = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('binary')
    );
    return jwtData.exp && jwtData.nbf
      ? (Date.now() + (jwtData.exp - jwtData.nbf) * 1000).toString() //make expiryDateTime relative to machine's time (note: [jwtData.exp - jwtData.nbf] = life of token in milliseconds)
      : '';
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveToken(token: string) {
    const tokenRefreshDate = Date.now().toString();
    const tokenExpiryDate = this.parseTokenExpiryDate(token);
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.TOKEN_REFRESH_DATE_KEY, tokenRefreshDate);
    localStorage.setItem(this.TOKEN_EXPIRY_DATE_KEY, tokenExpiryDate);
  }
}
