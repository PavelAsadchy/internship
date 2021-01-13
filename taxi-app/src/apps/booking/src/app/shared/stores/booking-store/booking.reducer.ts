import { Action, createReducer, on } from '@ngrx/store';
import * as BookingActions from './booking.actions';
import {
  bookingAdapter,
  IBookingState,
  INITIAL_BOOKING_STATE,
} from './booking.state';

const bookingReducer = createReducer(
  INITIAL_BOOKING_STATE,
  on(BookingActions.LOAD_BOOKINGS_BY_QUERY_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(
    BookingActions.LOAD_BOOKINGS_BY_QUERY_SUCCESS_ACTION,
    (state, { serverResponse }) => {
      return bookingAdapter.setAll(serverResponse.bookings, {
        ...state,
        loading: false,
        loaded: true,
        totalLength: serverResponse.totalLength,
        errorMessage: null,
      });
    }
  ),
  on(
    BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION,
    (state, { message }) => ({
      ...state,
      entities: {},
      loading: false,
      loaded: false,
      totalLength: 0,
      errorMessage: message.value,
    })
  ),

  on(BookingActions.REFRESH_QUERY_PARAMS_ACTION, (state, { params }) => ({
    ...state,
    bookingQueryParams: {
      ...state.bookingQueryParams,
      ...params,
    },
  })),

  on(BookingActions.LOAD_BOOKING_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    errorMessage: null,
  })),
  on(
    BookingActions.LOAD_BOOKING_SUCCESS_ACTION,
    (state, { selectedBooking }) => ({
      ...state,
      selectedBooking,
      loading: false,
      loaded: true,
    })
  ),
  on(BookingActions.LOAD_BOOKING_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  })),
  on(BookingActions.CLEAR_SELECTED_BOOKING_ACTION, (state) => ({
    ...state,
    selectedBooking: null,
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
