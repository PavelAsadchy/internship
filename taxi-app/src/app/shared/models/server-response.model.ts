import { IBooking } from './booking.model';

export interface IServerResponse {
  bookings: IBooking[];
  totalLength: number;
}
