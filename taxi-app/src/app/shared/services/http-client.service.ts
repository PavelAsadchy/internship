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
import { catchError } from 'rxjs/operators';
import { ITest } from '../models/test.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private readonly genericService: GenericService
  ) {}

  get<T>(url: string, options?: any): Observable<HttpResponse<T>> {
    return this.http
      .get<T>(url, { observe: 'response' })
      .pipe(catchError(this.genericService.handleError));
  }

  post(url: string, body: any) {
    return this.http
      .post(url, 'body', { headers: { header: 'something' } })
      .pipe(catchError(this.genericService.handleError));
  }

  delete() {
    return this.http
      .delete('url', { headers: { header: 'something' } })
      .pipe(catchError(this.genericService.handleError));
  }

  update() {
    return this.http
      .patch('url', 'body', { headers: { header: 'something' } })
      .pipe(catchError(this.genericService.handleError));
  }

  private setHeaders(token: string) {
    const httpOptions = { headers: new HttpHeaders() };

    httpOptions.headers.set('Authorization', `Bearer ${token}`);
  }
}
