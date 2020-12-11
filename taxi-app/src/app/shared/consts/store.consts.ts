import {
  IShowMessageOnAction,
  ISnackbarOptions,
} from '../models/show-message.model';

export const SNACKBAR_OPTIONS: ISnackbarOptions = {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
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
  loadBookingsFail: {
    value: 'Failed to load bookings',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  loadBooking: {
    value: 'Getting selected booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  loadBookingFail: {
    value: 'Failed to load selected booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  createBooking: {
    value: 'Saving new booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  createBookingFail: {
    value: 'Failed to save new booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  updateBooking: {
    value: 'Updating new options',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  updateBookingFail: {
    value: 'Failed to update new options',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  deleteBookingSuccess: {
    value: 'Booking was deleted',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  deleteBookingFail: {
    value: 'Failed to delete the booking',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
  defaultBookingActionFail: {
    value: 'Failed to complete',
    action: null,
    options: SNACKBAR_OPTIONS,
  },
};
