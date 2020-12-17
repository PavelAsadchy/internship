import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { IErrorHandle } from '../models/error-handle.model';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('errorEvent');
      return throwError(error.error.message);
    } else {
      console.log(error);
      const errorHandle: IErrorHandle = {
        internal_code: 666,
        validations_errors: 'smth',
        status: error.status,
        message: error.message,
      };
      console.log(errorHandle);

      return throwError(errorHandle);
    }
  }
}
