import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IHeaders, IMyRequestParams } from '../models/my-request-params.model';
import { GenericService } from './generic.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private readonly genericService: GenericService
  ) {}

  myGet<T>(requestParams: IMyRequestParams): Observable<{}> {
    const processedRequest = this.processRequest(requestParams);

    return this.http
      .get<T>(processedRequest.url, {
        headers: this.setHeaders(processedRequest.headers),
      })
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.genericService.handleError(error)
        )
      );
  }

  myPost<T>(requestParams: IMyRequestParams): Observable<T> {
    return this.http
      .post<T>(requestParams.url, requestParams.payload, {
        headers: this.setHeaders(requestParams.headers),
      })
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.genericService.handleError(error)
        )
      );
  }

  myPatch<T>(requestParams: IMyRequestParams): Observable<T> {
    return this.http
      .patch<T>(requestParams.url, requestParams.payload)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.genericService.handleError(error)
        )
      );
  }

  myDelete<T>(requestParams: IMyRequestParams): Observable<T> {
    return this.http
      .delete<T>(requestParams.url)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.genericService.handleError(error)
        )
      );
  }

  setHeaders(requestHeaders: IHeaders): HttpHeaders {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    if (requestHeaders)
      headers = headers.set(requestHeaders.name, requestHeaders.value);
    return headers;
  }

  private processRequest(requestParams: IMyRequestParams): IMyRequestParams {
    const filterObj = requestParams.search.filter;
    for (let prop in filterObj) {
      if (filterObj[prop] instanceof Date) {
        filterObj[prop] = this.datePipe.transform(
          filterObj[prop],
          'yyyy-MM-dd-HH-mm-ss-ZZZZZ'
        );
      }
    }

    return requestParams;
  }
}
