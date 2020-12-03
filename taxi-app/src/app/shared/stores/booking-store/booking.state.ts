import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IBooking } from '../../models/booking.model';

export interface IBookingState extends EntityState<IBooking> {
  selectedBookingId: string;
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
}

export const bookingAdapter: EntityAdapter<IBooking> = createEntityAdapter<IBooking>();

export const DEFAULT_BOOKING: IBookingState = {
  ids: [],
  entities: {},
  selectedBookingId: null,
  loading: false,
  loaded: false,
  errorMessage: null,
};

export const INITIAL_BOOKING_STATE: IBookingState = bookingAdapter.getInitialState(
  DEFAULT_BOOKING
);
