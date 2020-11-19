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
}
