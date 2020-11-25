import { createAction, props } from '@ngrx/store';
import { IBookingOptions } from '../../models/booking-options.model';
import { Update } from '@ngrx/entity';

export enum ActionsType {
  LOAD_BOOKINGS = '[BOOKING] Load Bookings',
  LOAD_BOOKINGS_SUCCESS = '[BOOKING] Load Bookings Success',
  LOAD_BOOKINGS_FAIL = '[BOOKING] Load Bookings Fail',
  LOAD_BOOKING = '[BOOKING] Load Booking',
  LOAD_BOOKING_SUCCESS = '[BOOKING] Load Booking Success',
  LOAD_BOOKING_FAIL = '[BOOKING] Load Booking Fail',
  CREATE_BOOKING = '[BOOKING] Create Booking',
  CREATE_BOOKING_SUCCESS = '[BOOKING] Create Booking Success',
  CREATE_BOOKING_FAIL = '[BOOKING] Create Booking Fail',
  UPDATE_BOOKING = '[BOOKING] Update Booking',
  UPDATE_BOOKING_SUCCESS = '[BOOKING] Update Booking Success',
  UPDATE_BOOKING_FAIL = '[BOOKING] Update Booking Fail',
  DELETE_BOOKING = '[BOOKING] Delete Booking',
  DELETE_BOOKING_SUCCESS = '[BOOKING] Delete Booking Success',
  DELETE_BOOKING_FAIL = '[BOOKING] Delete Booking Fail',
}

export const BOOKINGS_LOAD_ACTION = createAction(ActionsType.LOAD_BOOKINGS);

export const BOOKINGS_LOAD_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_SUCCESS,
  props<{ bookingList: IBookingOptions[] }>()
);

export const BOOKINGS_LOAD_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_FAIL,
  props<{ err: string }>()
);

export const BOOKING_LOAD_ACTION = createAction(
  ActionsType.LOAD_BOOKING,
  props<{ bookingId: string }>()
);

export const BOOKING_LOAD_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKING_SUCCESS,
  props<{ selectedBooking: IBookingOptions }>()
);

export const BOOKING_LOAD_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKING_FAIL,
  props<{ err: string }>()
);

export const BOOKING_CREATE_ACTION = createAction(
  ActionsType.CREATE_BOOKING,
  props<{ booking: IBookingOptions }>()
);

export const BOOKING_CREATE_SUCCESS_ACTION = createAction(
  ActionsType.CREATE_BOOKING_SUCCESS,
  props<{ booking: IBookingOptions }>()
);

export const BOOKING_CREATE_FAIL_ACTION = createAction(
  ActionsType.CREATE_BOOKING_FAIL,
  props<{ err: string }>()
);

export const BOOKING_UPDATE_ACTION = createAction(
  ActionsType.UPDATE_BOOKING,
  props<{ booking: IBookingOptions }>()
);

export const BOOKING_UPDATE_SUCCESS_ACTION = createAction(
  ActionsType.UPDATE_BOOKING_SUCCESS,
  props<{ update: Update<IBookingOptions> }>()
);

export const BOOKING_UPDATE_FAIL_ACTION = createAction(
  ActionsType.UPDATE_BOOKING_FAIL,
  props<{ err: string }>()
);

export const BOOKING_DELETE_ACTION = createAction(
  ActionsType.DELETE_BOOKING,
  props<{ bookingId: string }>()
);

export const BOOKING_DELETE_SUCCESS_ACTION = createAction(
  ActionsType.DELETE_BOOKING_SUCCESS,
  props<{ bookingId: string }>()
);

export const BOOKING_DELETE_FAIL_ACTION = createAction(
  ActionsType.DELETE_BOOKING_FAIL,
  props<{ err: string }>()
);
