import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, filter, retry, switchMap, take } from 'rxjs/operators';
import { ITokens } from '../models/tokens.model';
import { Store } from '@ngrx/store';
import { AUTH_REFRESH_TOKEN } from '../stores/auth-store/auth.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isTokenRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<
    string
  >(null);

  constructor(
    private readonly authService: AuthService,
    private store: Store
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(
    request: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401error(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);

      // this.store.dispatch(AUTH_REFRESH_TOKEN());

      return this.authService.refreshToken().pipe(
        switchMap((token: string) => {
          this.isTokenRefreshing = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this.addToken(request, token));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => !!token),
        take(1),
        switchMap((jwt) => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }
}
