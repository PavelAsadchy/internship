import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../apps/booking/src/app/shared/services/auth.service';
import { catchError, retry } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AUTH_REFRESH_TOKEN } from '../../../apps/booking/src/app/shared/stores/auth-store/auth.actions';
import { IAuthState } from '../../../apps/booking/src/app/shared/stores/auth-store/auth.state';
import { GenericService } from '../../../apps/booking/src/app/shared/services/generic.service';
import { HttpClientService } from '../../../apps/booking/src/app/shared/services/http-client.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private store: Store<IAuthState>,
    private readonly genericService: GenericService,
    private readonly httpClientService: HttpClientService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.has('InterceptorSkipHeader')) {
      const headers = request.headers.delete('InterceptorSkipHeader');
      return next.handle(request.clone({ headers }));
    }
    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401error(request, next);
        } else {
          return this.genericService.handleError(error);
        }
      })
    );
  }

  private addToken(
    request: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    return request.clone({
      headers: this.httpClientService.setHeaders({
        name: 'Authorization',
        value: `Bearer ${token}`,
      }),
    });
  }

  private handle401error(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.dispatch(AUTH_REFRESH_TOKEN());
    return next.handle(this.addToken(request, this.authService.getJwtToken()));
  }
}
