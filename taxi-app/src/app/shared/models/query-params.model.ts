import { Moment } from 'moment';

// export interface ISortParams {
//   sort: string;
//   order: string;
// }

export interface ISortParams {
  active: string;
  direction: string;
}

export interface IFilterParams {
  bookingId: string;
  price: number;
  search: string;
  statuses: string[];
  dateFrom: Moment;
  channels: string[];
  dateTo: Moment;
  vehicle: string[];
}

export interface IRefreshQueryEvent {
  type: string;
  params: ISortParams | IFilterParams;
}

export interface ISort {
  type: string;
  sorting: ISortParams;
}

export interface IFilter {

  filter: IFilterParams;
}

export interface IQueryParams {
  sort: ISortParams;
  filter: IFilterParams;
}
