import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITest } from '../models/test.model';
import { AuthService } from './auth.service';
import { GenericService } from './generic.service';

const httpOptions = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private readonly authService: AuthService,
    private readonly genericService: GenericService
  ) {}

  // get<T>(url: string, options?: any): Observable<HttpResponse<T>> {
  //   return this.http
  //     .get<T>(url, { observe: 'response' })
  //     .pipe(catchError(this.genericService.handleError));
  // }

  get<T>(url: string, options?: any): Observable<T> {
    // const requesOptions = { headers: new HttpHeaders() };
    if (options) this.setHeaders(httpOptions.headers, options);
    return this.http
      .get<T>(url, httpOptions)
      // .pipe(catchError(this.genericService.handleError));
  }

  post<T>(url: string, body: T, options?: any): Observable<T> {
    // const requesOptions = { headers: new HttpHeaders() };
    if (options) this.setHeaders(httpOptions.headers, options);
    return this.http
      .post<T>(url, body, httpOptions)
      .pipe(catchError(this.genericService.handleError));
  }

  update<T>(url: string, body: T): Observable<T> {
    return this.http
      .patch<T>(url, body, httpOptions)
      .pipe(catchError(this.genericService.handleError));
  }

  delete(url: string): Observable<void> {
    return this.http
      .delete<void>(url, httpOptions)
      .pipe(catchError(this.genericService.handleError));
  }

  private setHeaders(headers: HttpHeaders, params: {name: string, value: string}): void {
    // const requesOptions = { headers: new HttpHeaders(params) };
    // return requesOptions;
    // headers.append(params.name, params.value)
    // Object.entries(params).forEach((entry: {name: string, value: string}) => headers.set(entry.name, entry.value))
    // const arr = Object.entries(params).forEach((entry: string[]) => headers.set(entry[0], entry[1]));
    headers.set(params.name, params.value)
    // const httpOptions = { headers: new HttpHeaders() };
    // const token = this.authService.getJwtToken();

    // httpOptions.headers.set('Authorization', `Bearer ${token}`);
  }
}
