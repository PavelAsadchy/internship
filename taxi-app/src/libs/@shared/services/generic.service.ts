import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IErrorHandle } from '../../../apps/booking/src/app/shared/models/error-handle.model';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor() {}

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      return throwError(error.error.message);
    } else {
      const errorHandle: IErrorHandle = {
        internal_code: error.status,
        validations_errors: error.statusText,
        status: error.status,
        message: error.message,
      };
      return throwError(errorHandle);
    }
  }
}
