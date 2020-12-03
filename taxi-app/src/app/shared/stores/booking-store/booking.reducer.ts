import { Action, createReducer, on } from '@ngrx/store';
import * as BookingActions from './booking.actions';
import {
  bookingAdapter,
  IBookingState,
  INITIAL_BOOKING_STATE,
} from './booking.state';

const bookingReducer = createReducer(
  INITIAL_BOOKING_STATE,
  on(BookingActions.LOAD_BOOKINGS_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(BookingActions.LOAD_BOOKINGS_SUCCESS_ACTION, (state, { bookingList }) => {
    return bookingAdapter.setAll(bookingList, {
      ...state,
      loading: false,
      loaded: true,
      errorMessage: null,
    });
  }),
  on(BookingActions.LOAD_BOOKINGS_FAIL_ACTION, (state, { message }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    errorMessage: message.value,
  })),

  on(BookingActions.LOAD_BOOKINGS_BY_ORDER_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(
    BookingActions.LOAD_BOOKINGS_BY_ORDER_SUCCESS_ACTION,
    (state, { bookingList }) => {
      return bookingAdapter.setAll(bookingList, {
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
      });
    }
  ),
  on(
    BookingActions.LOAD_BOOKINGS_BY_ORDER_FAIL_ACTION,
    (state, { message }) => ({
      ...state,
      loading: false,
      loaded: false,
      errorMessage: message.value,
    })
  ),

  on(
    BookingActions.LOAD_BOOKING_SUCCESS_ACTION,
    (state, { selectedBooking }) => {
      return bookingAdapter.addOne(selectedBooking, {
        ...state,
        selectedBookingId: selectedBooking.id,
      });
    }
  ),
  on(BookingActions.LOAD_BOOKING_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  })),

  on(BookingActions.CREATE_BOOKING_SUCCESS_ACTION, (state, { newBooking }) => {
    return bookingAdapter.addOne(newBooking, state);
  }),
  on(BookingActions.CREATE_BOOKING_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  })),

  on(BookingActions.UPDATE_BOOKING_SUCCESS_ACTION, (state, { update }) => {
    return bookingAdapter.updateOne(update, state);
  }),
  on(BookingActions.UPDATE_BOOKING_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  })),

  on(BookingActions.DELETE_BOOKING_SUCCESS_ACTION, (state, { bookingId }) => {
    return bookingAdapter.removeOne(bookingId, state);
  }),
  on(BookingActions.DELETE_BOOKING_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  }))
);

export function reducer(state: IBookingState | undefined, action: Action) {
  return bookingReducer(state, action);
}
