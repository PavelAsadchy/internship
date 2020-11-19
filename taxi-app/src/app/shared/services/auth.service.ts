import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AUTH_URL,
  JWT_TOKEN,
  REFRESH_TOKEN,
  USER_NAME,
} from '../consts/consts';
import { ILoggedInUser } from '../models/loggedInUser.model';
import { ITokens } from '../models/tokens.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return Boolean(this.getJwtToken());
  }

  login(user: IUser): Observable<ITokens> {
    return this.http.post<ITokens>(AUTH_URL + '/login', user);
  }

  logout(): void {
    this.http.post<any>(AUTH_URL + '/logout', {
      refreshToken: this.getRefreshToken(),
    });
    this.doLogoutUser();
  }

  refreshToken(): Observable<string> {
    return this.http.post<string>(AUTH_URL + '/refresh', {
      refreshToken: this.getRefreshToken(),
    });
  }

  getJwtToken(): string {
    return localStorage.getItem(JWT_TOKEN);
  }

  doLoginUser(user: ILoggedInUser): void {
    this.storeUser(user);
  }

  private storeUser(user: ILoggedInUser) {
    localStorage.setItem(USER_NAME, user.username);
    localStorage.setItem(JWT_TOKEN, user.jwt);
    localStorage.setItem(REFRESH_TOKEN, user.refreshToken);
  }

  private doLogoutUser(): void {
    this.removeTokens();
  }

  private removeTokens(): void {
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  storeJwtToken(jwt: string): void {
    localStorage.setItem(JWT_TOKEN, jwt);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }
}
