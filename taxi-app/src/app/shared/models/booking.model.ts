import { IBookingOptions } from './booking-options.model';

export interface IBooking extends IBookingOptions {
  price: number;
  pickUpTime: Date;
  bookingTime: Date;
}
