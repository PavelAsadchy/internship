import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface ISnackbarOptions {
  duration: number;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  panelClass?: string;
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
  loadBooking: IShowMessage;
  createBooking: IShowMessage;
  updateBooking: IShowMessage;
  defaultActionSuccess: IShowMessage;
  defaultActionWarning: IShowMessage;
  defaultActionFail: IShowMessage;
  loadAdminGroups: IShowMessage;
  loadGroupPrivileges: IShowMessage;
  updatePrivileges: IShowMessage;
}
