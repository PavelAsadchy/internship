import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private http: HttpClient,
    private readonly genericService: GenericService
  ) {}

  test() {
    return this.http
      .get('test')
      .pipe(catchError(this.genericService.handleError));
  }

  post() {
    return this.http
      .post('url', 'body', { headers: { header: 'something' } })
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
}
