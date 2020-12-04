import { Moment } from 'moment';

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
