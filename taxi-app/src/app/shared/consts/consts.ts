import { SnackbarOptions } from '../models/snackbar-options.model';

export const AUTH_URL = 'http://localhost:8080';

export const USER_NAME = 'USER_NAME';
export const JWT_TOKEN = 'JWT_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const LOCATION_API_URL = 'https://ipapi.co/json/';

export enum BookingOptionsType {
  BOOKING_CHANNEL = 'BOOKING_CHANNEL',
  PICK_UP_TIME = 'PICK_UP_TIME',
  PICK_UP_POINT = 'PICK_UP_POINT',
  PICK_UP_ADDRESS = 'PICK_UP_ADDRESS',
  DROP_OFF_POINT = 'DROP_OFF_POINT',
  DROP_OFF_ADDRESS = 'DROP_OFF_ADDRESS',
  VEHICLE = 'VEHICLE',
  CUSTOMER_PHONE = 'CUSTOMER_PHONE',
  CUSTOMER_EMAIL = 'CUSTOMER_EMAIL',
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  PASSENGER_PHONE = 'PASSENGER_PHONE',
  PASSENGER_NAME = 'PASSENGER_NAME',
  PAYMENT_CHANNEL = 'PAYMENT_CHANNEL',
  PAYMENT_TYPE = 'PAYMENT_TYPE',
  PAYMENT_OPTIONS = 'PAYMENT_OPTIONS',
  PAYMENT_EXTRAS = 'PAYMENT_EXTRAS',
  DRIVER_NOTE = 'DRIVER_NOTE',
  DISPATCHER_NOTE = 'DISPATCHER_NOTE',
}

export const SNACKBAR_OPTIONS: SnackbarOptions = {
  duration: 3000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
};
