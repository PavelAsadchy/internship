import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IBooking } from '../../models/booking.model';
import { IQueryParams } from '../../models/query-params.model';

export interface IBookingState extends EntityState<IBooking> {
  selectedBookingId: string;
  bookingQueryParams: IQueryParams;
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
}

export const bookingAdapter: EntityAdapter<IBooking> = createEntityAdapter<IBooking>();

export const DEFAULT_BOOKING: IBookingState = {
  ids: [],
  entities: {},
  selectedBookingId: null,
  bookingQueryParams: {
    filter: {
      bookingId: null,
      price: null,
      search: null,
      statuses: null,
      dateFrom: null,
      channels: null,
      dateTo: null,
      vehicle: null,
    },
    sort: {
      field: null,
      direction: null,
    },
    paginate: {
      pageIndex: null,
      pageSize: null,
    },
  },
  loading: false,
  loaded: false,
  errorMessage: null,
};

export const INITIAL_BOOKING_STATE: IBookingState = bookingAdapter.getInitialState(
  DEFAULT_BOOKING
);
