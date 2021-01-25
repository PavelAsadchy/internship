import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_DATA } from '../consts/app.consts';
import { ILoggedInUser } from '../models/user-logged.model';
import { IUserAuthorized } from '../models/tokens.model';
import { IUser } from '../models/user.model';
import { HttpClientService } from './http-client.service';
import { GenericService } from './generic.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { IUserNew } from '../models/user-new.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpClientService {
  authUrl: string;

  constructor(
    http: HttpClient,
    datePipe: DatePipe,
    genericService: GenericService
  ) {
    super(http, datePipe, genericService);
    this.authUrl = environment.authApiUrl;
  }

  isLoggedIn(): boolean {
    return Boolean(this.getJwtToken());
  }

  signup(newUser: IUserNew): Observable<any> {
    return this.myPost<IUserNew>({
      url: this.authUrl + '/signup',
      payload: newUser,
    });
  }

  login(user: IUser): Observable<IUserAuthorized> {
    return this.myPost<IUserAuthorized>({
      url: this.authUrl + '/login',
      payload: user,
    });
  }

  logout(): void {
    this.myPost<any>({
      url: this.authUrl + '/logout',
      payload: {
        refreshToken: this.getRefreshToken(),
      },
    });
    this.doLogoutUser();
  }

  refreshToken(): Observable<string> {
    return this.myPost<string>({
      url: this.authUrl + '/refresh',
      payload: {
        refreshToken: this.getRefreshToken(),
      },
    });
  }

  getJwtToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_DATA.JWT_TOKEN);
  }

  doLoginUser(user: ILoggedInUser): void {
    this.storeUser(user);
  }

  private storeUser(user: ILoggedInUser) {
    localStorage.setItem(LOCAL_STORAGE_DATA.USER_NAME, user.username);
    localStorage.setItem(LOCAL_STORAGE_DATA.JWT_TOKEN, user.jwt);
    localStorage.setItem(LOCAL_STORAGE_DATA.REFRESH_TOKEN, user.refreshToken);
    localStorage.setItem(LOCAL_STORAGE_DATA.ROLES, JSON.stringify(user.roles));
  }

  private doLogoutUser(): void {
    this.removeTokens();
  }

  private removeTokens(): void {
    localStorage.removeItem(LOCAL_STORAGE_DATA.USER_NAME);
    localStorage.removeItem(LOCAL_STORAGE_DATA.JWT_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_DATA.REFRESH_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_DATA.ROLES);
  }

  storeJwtToken(jwt: string): void {
    localStorage.setItem(LOCAL_STORAGE_DATA.JWT_TOKEN, jwt);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_DATA.REFRESH_TOKEN);
  }
}
