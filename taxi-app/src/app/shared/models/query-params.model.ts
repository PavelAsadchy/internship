import { Moment } from 'moment';

export interface IQueryParams {
  bookingId: string;
  price: number;
  search: string;
  statuses: string[];
  dateFrom: Moment;
  channels: string[];
  dateTo: Moment;
  vehicle: string[];
  sort: string;
  direction: string;
}
