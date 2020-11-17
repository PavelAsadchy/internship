import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
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

  login(user: IUser): Observable<any> {
    return this.http.post<any>(AUTH_URL + '/login', user);
  }

  logout(): Observable<boolean> {
    return this.http
      .post<any>(AUTH_URL + '/logout', {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError((error) => {
          return of(false);
        })
      );
  }

  refreshToken(): Observable<ITokens> {
    return this.http
      .post<any>(AUTH_URL + '/refresh', {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(tap((tokens: ITokens) => this.storeJwtToken(tokens.jwt)));
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
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string): void {
    localStorage.setItem(JWT_TOKEN, jwt);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }
}
