import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, filter, retry, switchMap, take } from 'rxjs/operators';
import { ITokens } from '../models/tokens.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isTokenRefreshing: boolean = false;
  private refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }
    return next.handle(request)
      .pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return this.handle401error(request, next);
          } else {
            console.log(error.error);
            return throwError(error);  
          }
        })
      );
  }

  private addToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle401error(request: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken()
        .pipe(
          switchMap((tokens: ITokens) => {
            this.isTokenRefreshing = false;
            this.refreshTokenSubject.next(tokens.jwt);
            return next.handle(this.addToken(request, tokens.jwt));
          })
        )
    } else {
      return this.refreshTokenSubject
        .pipe(
          filter(token => token != null),
          take(1),
          switchMap(jwt => {
            return next.handle(this.addToken(request, jwt));
          })
        )
    }
  }
}
