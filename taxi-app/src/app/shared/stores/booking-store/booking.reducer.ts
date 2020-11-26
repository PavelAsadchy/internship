import { Action, createReducer, on } from '@ngrx/store';
import * as BookingActions from './booking.actions';
import {
  bookingAdapter,
  IBookingState,
  INITIAL_BOOKING_STATE,
} from './booking.state';

const bookingReducer = createReducer(
  INITIAL_BOOKING_STATE,
  on(BookingActions.BOOKINGS_LOAD_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(BookingActions.BOOKINGS_LOAD_SUCCESS_ACTION, (state, { bookingList }) => {
    return bookingAdapter.setAll(bookingList, {
      ...state,
      loading: false,
      loaded: true,
      errorMessage: null,
    });
  }),
  on(BookingActions.BOOKINGS_LOAD_FAIL_ACTION, (state, { err }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    errorMessage: err,
  })),

  on(
    BookingActions.BOOKING_LOAD_SUCCESS_ACTION,
    (state, { selectedBooking }) => {
      return bookingAdapter.addOne(selectedBooking, {
        ...state,
        selectedBookingId: selectedBooking.id,
      });
    }
  ),
  on(BookingActions.BOOKING_LOAD_FAIL_ACTION, (state, { err }) => ({
    ...state,
    errorMessage: err,
  })),

  on(BookingActions.BOOKING_CREATE_SUCCESS_ACTION, (state, { newBooking }) => {
    return bookingAdapter.addOne(newBooking, state);
  }),
  on(BookingActions.BOOKING_CREATE_FAIL_ACTION, (state, { err }) => ({
    ...state,
    errorMessage: err,
  })),

  on(BookingActions.BOOKING_UPDATE_SUCCESS_ACTION, (state, { update }) => {
    return bookingAdapter.updateOne(update, state);
  }),
  on(BookingActions.BOOKING_UPDATE_FAIL_ACTION, (state, { err }) => ({
    ...state,
    errorMessage: err,
  })),

  on(BookingActions.BOOKING_DELETE_SUCCESS_ACTION, (state, { bookingId }) => {
    return bookingAdapter.removeOne(bookingId, state);
  }),
  on(BookingActions.BOOKING_DELETE_FAIL_ACTION, (state, { err }) => ({
    ...state,
    errorMessage: err,
  }))
);

export function reducer(state: IBookingState | undefined, action: Action) {
  return bookingReducer(state, action);
}
