import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookingAdapter, IBookingState } from './booking.state';

export const FEATURE_KEY = 'booking';

export const SELECT_BOOKING_LIST_FEATURE = createFeatureSelector<IBookingState>(
  FEATURE_KEY
);

export const SELECT_BOOKING_LIST = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  bookingAdapter.getSelectors().selectAll
);

export const SELECT_BOOKING_LOADING = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  (state: IBookingState) => state.loading
);

export const SELECT_BOOKING_LOADED = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  (state: IBookingState) => state.loaded
);

export const SELECT_BOOKING_ERROR = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  (state: IBookingState) => state.errorMessage
);

export const SELECT_CURRENT_BOOKING_ID = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  (state: IBookingState) => state.selectedBookingId
);

export const SELECT_CURRENT_BOOKING = createSelector(
  SELECT_BOOKING_LIST_FEATURE,
  SELECT_CURRENT_BOOKING_ID,
  (state: IBookingState) => state.entities[state.selectedBookingId]
);
