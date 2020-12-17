import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IBooking } from '../../models/booking.model';
import {
  IFilterParams,
  IPaginateParams,
  IQueryParams,
  ISortParams,
} from '../../models/query-params.model';

export interface IBookingState extends EntityState<IBooking> {
  selectedBooking: IBooking;
  bookingQueryParams: IQueryParams;
  totalLength: number;
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
}

export const bookingAdapter: EntityAdapter<IBooking> = createEntityAdapter<IBooking>();

export const DEFAULT_FILTER_PARAMS: IFilterParams = {
  bookingId: null,
  price: null,
  search: null,
  statuses: null,
  dateFrom: null,
  channels: null,
  dateTo: null,
  vehicle: null,
};

export const DEFAULT_SORT_PARAMS: ISortParams = {
  field: null,
  direction: null,
};

export const DEFAULT_PAGINATE_PARAMS: IPaginateParams = {
  pageIndex: 0,
  pageSize: 5,
};

export const DEFAULT_QUERY_PARAMS: IQueryParams = {
  filter: DEFAULT_FILTER_PARAMS,
  sort: DEFAULT_SORT_PARAMS,
  paginate: DEFAULT_PAGINATE_PARAMS,
};

export const DEFAULT_BOOKING: IBookingState = {
  ids: [],
  entities: {},
  selectedBooking: null,
  bookingQueryParams: DEFAULT_QUERY_PARAMS,
  totalLength: null,
  loading: false,
  loaded: false,
  errorMessage: null,
};

export const INITIAL_BOOKING_STATE: IBookingState = bookingAdapter.getInitialState(
  DEFAULT_BOOKING
);
