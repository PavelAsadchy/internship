import { IFilterParams, IQueryParams, ISortParams } from '../models/query-params.model';

const DEFAULT_SORT_PARAMS: ISortParams = {
  active: null,
  direction: null,
}

const DEFAULT_FILTER_PARAMS: IFilterParams = {
  bookingId: null,
  price: null,
  search: null,
  statuses: null,
  dateFrom: null,
  channels: null,
  dateTo: null,
  vehicle: null,
}

export const DEFAULT_QUERY_PARAMS: IQueryParams = {
  sort: DEFAULT_SORT_PARAMS,
  filter: DEFAULT_FILTER_PARAMS,
}