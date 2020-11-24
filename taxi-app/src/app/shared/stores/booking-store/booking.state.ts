import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IBookingOptions } from '../../models/booking-options.model';

export interface IBookingState extends EntityState<IBookingOptions> {
  // data: IBookingOptions[];
  selectedBookingId: number;
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
}

export const bookingAdapter: EntityAdapter<IBookingOptions> = createEntityAdapter<IBookingOptions>();

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
