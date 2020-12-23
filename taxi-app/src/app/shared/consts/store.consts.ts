import {
  IShowMessageOnAction,
  ISnackbarOptions,
} from '../models/show-message.model';

export const SNACKBAR_OPTIONS: ISnackbarOptions = {
  duration: 1000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
};

export const SUCCESS_SNACKBAR_OPTIONS: ISnackbarOptions = {
  duration: 1000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
  panelClass: 'notif-success',
};

export const WARNING_SNACKBAR_OPTIONS: ISnackbarOptions = {
  duration: 5000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
  panelClass: 'notif-warning',
};

export const FAIL_SNACKBAR_OPTIONS: ISnackbarOptions = {
  duration: 1000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
  panelClass: 'notif-error',
};

export const SHOW_MESSAGE_VALUES: IShowMessageOnAction = {
  loginSuccess: {
    value: 'Welcome',
    action: 'Ok',
    options: SNACKBAR_OPTIONS,
  },
  loginFailure: {
    value: 'Wrong data, please try again',
    action: 'Ok',
    options: SNACKBAR_OPTIONS,
  },
  logout: {
    value: 'Come back later',
    action: 'Ok',
    options: SNACKBAR_OPTIONS,
  },
  loadBookings: {
    value: 'Loading bookings list',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  loadBooking: {
    value: 'Getting selected booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  createBooking: {
    value: 'Saving new booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  updateBooking: {
    value: 'Updating new options',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  defaultActionSuccess: {
    value: 'Successful',
    action: null,
    options: SUCCESS_SNACKBAR_OPTIONS,
  },
  defaultActionWarning: {
    value: 'Client-side ERROR',
    action: 'X',
    options: WARNING_SNACKBAR_OPTIONS,
  },
  defaultActionFail: {
    value: 'ERROR',
    action: 'X',
    options: FAIL_SNACKBAR_OPTIONS,
  },
};
