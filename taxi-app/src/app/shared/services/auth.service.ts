import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators'
import { AUTH_URL, JWT_TOKEN, REFRESH_TOKEN } from '../consts/consts';
import { ITokens } from '../models/tokens.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser: string = null;

  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean {
    return Boolean(this.getJwtToken());
  }

  public login(user: IUser): Observable<boolean> {
    return this.http.post<any>(AUTH_URL + '/login', user)
      .pipe(
        tap((tokens: ITokens) => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          return of(false);
        })
      );
  }

  private doLoginUser(username: string, tokens: ITokens): void {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: ITokens): void {
    localStorage.setItem(JWT_TOKEN, tokens.jwt);
    localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
  }

  public logout(): Observable<boolean> {
    return this.http.post<any>(AUTH_URL + '/logout', {
      'refreshToken': this.getRefreshToken()
    }).pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          return of(false);
        })
      )
  }

  private doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
  }

  private removeTokens(): void {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  public refreshToken(): Observable<ITokens> {
    return this.http.post<any>(AUTH_URL + '/refresh', {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap((tokens: ITokens) => this.storeJwtToken(tokens.jwt))
    )
  }

  private storeJwtToken(jwt: string): void {
    localStorage.setItem(JWT_TOKEN, jwt);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  public getJwtToken(): string {
    return localStorage.getItem(JWT_TOKEN);
  }
}
