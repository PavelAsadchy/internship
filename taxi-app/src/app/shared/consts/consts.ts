import { IShowMessageOnAction } from '../models/show-message.model';
import { ISnackbarOptions } from '../models/show-message.model';

export const AUTH_URL = 'http://localhost:8080';

export const USER_NAME = 'USER_NAME';
export const JWT_TOKEN = 'JWT_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const LOCATION_API_URL = 'https://ipapi.co/json/';
export const DATABASE_URL =
  'https://taxi-app-294611.firebaseio.com/booking-list';

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

export enum BookingChannelOptions {
  CALL = 'Call',
  EMAIL = 'Email',
  WALKING_ROCCO = 'Walking Rocco',
  CONCIERGE = 'Concierge',
  GOODS_DELIVERY = 'Goods Delivery',
  MOBILE_APP = 'Mobile App',
  BOT = 'Bot',
}

export enum PickUpTimeOptions {
  NOW = 'Now',
  LATER = 'Later',
}

export enum PickUpPointOptions {
  ADRESS = 'Adress',
  AIRPORT = 'Airport',
  ROCCO = 'Rocco',
  HEAD_OFFICE = 'Head Office',
}

export enum DropOffPointOptions {
  ADRESS = 'Adress',
  AIRPORT = 'Airport',
  ROCCO = 'Rocco',
  HEAD_OFFICE = 'Head Office',
  INDEGINITI = 'Indefinite',
}

export enum VehicleOptions {
  CAB = 'Cab',
  BRANDED_STANDART_CAB = 'Branded standart Cab',
  VAN = 'Van',
  EXECUTIVE_CAB = 'Executive Cab',
  EXECUTIVE_VAN = 'Executive Cab',
  LUXURY_EXECUTIVE = 'Luxury Executive',
  MINI_BUS = 'Mini Bus',
  RESTRICTED_MOBILITY = 'Restricted Mobility',
  VINTAGE = 'Vintage',
  LUXURY_EXEV_VAN = 'Luxury Exec. Van',
}

export enum PaymentChannels {
  IN_VEHICLE = 'In Vehicle',
  OVER_THE_COUNTER = 'Over The Counter',
  INVOICE = 'Invoice',
}

export enum PaymentTypes {
  CASH = 'Cash',
}

export enum PaymentBasicOptions {
  WILLING_TO_SHARE = 'Willing to share',
}

export enum PaymentExtraOptions {
  BABY_SEAT = 'Baby seat (+€5)',
  IMMEDIATE_RETURN = 'Immediate Return (Extra Fee)',
  NO_LUGGAGE = 'No Luggage',
  EXTRA_LUGGAGE = 'Extra Luggage',
  STATION_WAGON = 'Station Wagon',
  PET_ONBOARD = 'Pet Onboard',
  RECEIPT = 'Receipt',
  RESTRICTED_MOBILITY = 'Restricted Mobility',
  STEP_STOOL = 'Step Stool',
  ARRIVAL_PACK = 'Arrival Pack',
  KEYS_FROM_OFFICE = 'Keys From Office',
  MALE_DRIVER = 'Male Driver',
  FEMALE_DRIVER = 'Female Driver',
}

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
