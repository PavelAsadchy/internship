import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AUTH_URL,
  JWT_TOKEN,
  REFRESH_TOKEN,
  USER_NAME,
} from '../consts/app.consts';
import { ILoggedInUser } from '../models/user-logged.model';
import { ITokens } from '../models/tokens.model';
import { IUser } from '../models/user.model';
import { HttpClientService } from './http-client.service';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpClientService {
  constructor(genericService: GenericService, http: HttpClient) {
    super(http, genericService);
  }

  isLoggedIn(): boolean {
    return Boolean(this.getJwtToken());
  }

  login(user: IUser): Observable<ITokens> {
    return this.myPost<ITokens>({
      url: AUTH_URL + '/login',
      payload: user,
    });
  }

  logout(): void {
    this.myPost<any>({
      url: AUTH_URL + '/logout',
      payload: {
        refreshToken: this.getRefreshToken(),
      },
    });
    this.doLogoutUser();
  }

  refreshToken(): Observable<string> {
    return this.myPost<string>({
      url: AUTH_URL + '/refresh',
      payload: {
        refreshToken: this.getRefreshToken(),
      },
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
