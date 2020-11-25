import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookingAdapter, IBookingState } from './booking.state';
import * as fromBooking from './booking.state';

export const FEATURE_KEY = 'booking';

export const SELECT_BOOKING_LIST_FEATURE = createFeatureSelector<IBookingState>(
  FEATURE_KEY
);

export const SELECT_BOOKING_LIST = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  bookingAdapter.getSelectors().selectAll
);

// export const GET_SELECTED_BOOKING_ID = (state: IBookingState) => state.selectedBookingId;

// const {
//   SELECT_IDS,
//   SELECT_ENTITIES,
//   SELECT_ALL,
//   SELECT_TOTAL,
// } = bookingAdapter.getSelectors();

// export const SELECT_BOOKING_IDS = SELECT_IDS;
// export const SELECT_BOOKING_ENTETIES = SELECT_ENTITIES;
// export const SELECT_ALL_BOOKINGS = SELECT_ALL;
// export const SELECT_BOOKING_TOTAL = SELECT_TOTAL;

// export interface State {
//   bookings: fromBooking.IBookingState;
// }

// export const selectBookingIds = createSelector(SELECT_BOOKING_LIST_FEATURE, SELECT_BOOKING_IDS);

export const SELECT_BOOKING_LOADING = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  (state: IBookingState) => state.loading
);
