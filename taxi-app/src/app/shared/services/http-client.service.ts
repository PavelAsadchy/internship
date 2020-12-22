import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IHeaders, IMyRequestParams } from '../models/my-request-params.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private readonly genericService: GenericService
  ) {}

  myGet<T>(requestParams: IMyRequestParams): Observable<{}> {
    if (requestParams.search.filter.dateFrom) {
      const dateObj = requestParams.search.filter;
      dateObj.dateFrom = dateObj.dateFrom.toString();
    }

    return this.http
      .get<T>(requestParams.url, {
        headers: this.setHeaders(requestParams.headers),
      })
      .pipe(catchError(this.genericService.handleError));
  }

  myPost<T>(requestParams: IMyRequestParams): Observable<T> {
    if (requestParams.payload.pickUpUrgency) {
      const dateObj = requestParams.payload;
      dateObj.pickUpUrgency = dateObj.pickUpUrgency.toString();
    }

    return this.http
      .post<T>(requestParams.url, requestParams.payload, {
        headers: this.setHeaders(requestParams.headers),
      })
      .pipe(catchError(this.genericService.handleError));
  }

  myPatch<T>(requestParams: IMyRequestParams): Observable<T> {
    return this.http
      .patch<T>(requestParams.url, requestParams.payload)
      .pipe(catchError(this.genericService.handleError));
  }

  myDelete<T>(requestParams: IMyRequestParams): Observable<T> {
    return this.http
      .delete<T>(requestParams.url)
      .pipe(catchError(this.genericService.handleError));
  }

  setHeaders(requestHeaders: IHeaders): HttpHeaders {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    if (requestHeaders)
      headers = headers.set(requestHeaders.name, requestHeaders.value);
    return headers;
  }
}
