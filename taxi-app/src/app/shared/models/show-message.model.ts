import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface ISnackbarOptions {
  duration: number;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
}

export interface IShowMessage {
  value: string;
  action: string;
  options: ISnackbarOptions;
}

export interface IShowMessageOnAction {
  loginSuccess: IShowMessage;
  loginFailure: IShowMessage;
  logout: IShowMessage;
  loadBookings: IShowMessage;
  loadBookingsFail: IShowMessage;
  loadBooking: IShowMessage;
  loadBookingFail: IShowMessage;
  createBooking: IShowMessage;
  createBookingFail: IShowMessage;
  updateBooking: IShowMessage;
  updateBookingFail: IShowMessage;
  deleteBookingSuccess: IShowMessage;
  deleteBookingFail: IShowMessage;
}
