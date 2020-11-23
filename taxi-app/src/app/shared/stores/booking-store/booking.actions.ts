import { createAction, props } from '@ngrx/store';
import { IBookingOptions } from '../../models/booking-options.model';
import { Update } from '@ngrx/entity';

export enum ActionsType {
  LOAD_BOOKINGS = '[BOOKING] Load Bookings',
  LOAD_BOOKINGS_SUCCESS = '[BOOKING] Load Bookings Success',
  LOAD_BOOKINGS_FAIL = '[BOOKING] Load Bookings Fail',
  CREATE_BOOKINGS = '[BOOKING] Create Bookings',
  CREATE_BOOKINGS_SUCCESS = '[BOOKING] Create Bookings Success',
  CREATE_BOOKINGS_FAIL = '[BOOKING] Create Bookings Fail',
  UPDATE_BOOKING = '[BOOKING] Update Booking',
  UPDATE_BOOKING_SUCCESS = '[BOOKING] Update Booking Success',
  UPDATE_BOOKING_FAIL = '[BOOKING] Update Booking Fail',
  REMOVE_BOOKING = '[BOOKING] Remove Booking',
  REMOVE_BOOKING_SUCCESS = '[BOOKING] Remove Booking Success',
  REMOVE_BOOKING_FAIL = '[BOOKING] Remove Booking Fail',
}

export const BOOKING_LOAD_ACTION = createAction(ActionsType.LOAD_BOOKINGS);

export const BOOKING_LOAD_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_SUCCESS,
  props<{ bookingList: IBookingOptions[] }>()
);

export const BOOKING_LOAD_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_FAIL,
  props<{ err: string }>()
);

export const BOOKING_CREATE_ACTION = createAction(
  ActionsType.CREATE_BOOKINGS,
  props<{ booking: IBookingOptions }>()
);

export const BOOKING_CREATE_SUCCESS_ACTION = createAction(
  ActionsType.CREATE_BOOKINGS_SUCCESS,
  props<{ booking: IBookingOptions }>()
);

export const BOOKING_CREATE_FAIL_ACTION = createAction(
  ActionsType.CREATE_BOOKINGS_FAIL,
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

export const BOOKING_REMOVE_ACTION = createAction(
  ActionsType.REMOVE_BOOKING,
  props<{ id: number }>()
);

export const BOOKING_REMOVE_SUCCESS_ACTION = createAction(
  ActionsType.REMOVE_BOOKING_SUCCESS,
  props<{ id: number }>()
);

export const BOOKING_REMOVE_FAIL_ACTION = createAction(
  ActionsType.REMOVE_BOOKING_FAIL
);
