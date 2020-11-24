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
