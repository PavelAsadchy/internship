import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IShowMessage } from '../../models/show-message.model';
import { IBooking } from '../../models/booking.model';
import { IFilterParams } from '../../models/filter-params.model';

export enum ActionsType {
  LOAD_BOOKINGS = '[BOOKING] Load Bookings',
  LOAD_BOOKINGS_SUCCESS = '[BOOKING] Load Bookings Success',
  LOAD_BOOKINGS_FAIL = '[BOOKING] Load Bookings Fail',
  LOAD_BOOKINGS_BY_ORDER = '[BOOKING] Load Bookings By Order',
  LOAD_BOOKINGS_BY_ORDER_SUCCESS = '[BOOKING] Load Bookings By Order Success',
  LOAD_BOOKINGS_BY_ORDER_FAIL = '[BOOKING] Load Bookings By Order Fail',
  LOAD_BOOKINGS_BY_FILTER = '[BOOKING] Load Bookings By Filter',
  LOAD_BOOKINGS_BY_FILTER_SUCCESS = '[BOOKING] Load Bookings By Filter Success',
  LOAD_BOOKINGS_BY_FILTER_FAIL = '[BOOKING] Load Bookings By Filter Fail',
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

export const LOAD_BOOKINGS_ACTION = createAction(ActionsType.LOAD_BOOKINGS);

export const LOAD_BOOKINGS_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_SUCCESS,
  props<{ bookingList: IBooking[] }>()
);

export const LOAD_BOOKINGS_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_FAIL,
  props<{ message: IShowMessage }>()
);

export const LOAD_BOOKINGS_BY_ORDER_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_ORDER,
  props<{ sort: string; order: string }>()
);

export const LOAD_BOOKINGS_BY_ORDER_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_ORDER_SUCCESS,
  props<{ bookingList: IBooking[] }>()
);

export const LOAD_BOOKINGS_BY_ORDER_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_ORDER_FAIL,
  props<{ message: IShowMessage }>()
);

export const LOAD_BOOKINGS_BY_FILTER_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_FILTER,
  props<{ filterParams: IFilterParams }>()
);

export const LOAD_BOOKINGS_BY_FILTER_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_FILTER_SUCCESS,
  props<{ filteredBookings: IBooking[] }>()
);

export const LOAD_BOOKINGS_BY_FILTER_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKINGS_BY_FILTER_FAIL,
  props<{ message: IShowMessage }>()
);

export const LOAD_BOOKING_ACTION = createAction(
  ActionsType.LOAD_BOOKING,
  props<{ bookingId: string }>()
);

export const LOAD_BOOKING_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_BOOKING_SUCCESS,
  props<{ selectedBooking: IBooking }>()
);

export const LOAD_BOOKING_FAIL_ACTION = createAction(
  ActionsType.LOAD_BOOKING_FAIL,
  props<{ message: IShowMessage }>()
);

export const CREATE_BOOKING_ACTION = createAction(
  ActionsType.CREATE_BOOKING,
  props<{ newBooking: IBooking }>()
);

export const CREATE_BOOKING_SUCCESS_ACTION = createAction(
  ActionsType.CREATE_BOOKING_SUCCESS,
  props<{ newBooking: IBooking }>()
);

export const CREATE_BOOKING_FAIL_ACTION = createAction(
  ActionsType.CREATE_BOOKING_FAIL,
  props<{ message: IShowMessage }>()
);

export const UPDATE_BOOKING_ACTION = createAction(
  ActionsType.UPDATE_BOOKING,
  props<{ booking: IBooking }>()
);

export const UPDATE_BOOKING_SUCCESS_ACTION = createAction(
  ActionsType.UPDATE_BOOKING_SUCCESS,
  props<{ update: Update<IBooking> }>()
);

export const UPDATE_BOOKING_FAIL_ACTION = createAction(
  ActionsType.UPDATE_BOOKING_FAIL,
  props<{ message: IShowMessage }>()
);

export const DELETE_BOOKING_ACTION = createAction(
  ActionsType.DELETE_BOOKING,
  props<{ bookingId: string }>()
);

export const DELETE_BOOKING_SUCCESS_ACTION = createAction(
  ActionsType.DELETE_BOOKING_SUCCESS,
  props<{ bookingId: string }>()
);

export const DELETE_BOOKING_FAIL_ACTION = createAction(
  ActionsType.DELETE_BOOKING_FAIL,
  props<{ message: IShowMessage }>()
);
