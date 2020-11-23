import { Action, createReducer, on } from '@ngrx/store';
import * as BookingActions from './booking.actions';
import {
  bookingAdapter,
  IBookingState,
  INITIAL_BOOKING_STATE,
} from './booking.state';

const bookingReducer = createReducer(
  INITIAL_BOOKING_STATE,
  on(BookingActions.BOOKING_LOAD_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(BookingActions.BOOKING_LOAD_SUCCESS_ACTION, (state, { bookingList }) => {
    return bookingAdapter.setAll(bookingList, {
      ...state,
      loading: false,
      loaded: true,
      errorMessage: null,
    });
  }),
  on(BookingActions.BOOKING_LOAD_FAIL_ACTION, (state, { err }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    errorMessage: err,
  })),
  on(BookingActions.BOOKING_CREATE_ACTION, (state, { booking }) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(BookingActions.BOOKING_CREATE_SUCCESS_ACTION, (state, { booking }) => ({
    ...state,
    data: [...state.data, booking],
    loading: false,
    loaded: true,
    errorMessage: null,
  })),
  on(BookingActions.BOOKING_CREATE_FAIL_ACTION, (state, { err }) => ({
    ...state,
    loading: false,
    loaded: false,
    errorMessage: err,
  }))
);

export function reducer(state: IBookingState | undefined, action: Action) {
  return bookingReducer(state, action);
}
