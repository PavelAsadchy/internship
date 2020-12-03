import { IBookingOptions } from './booking-options.model';

export interface IBooking {
  bookingChannel: string;
  pickUpAddress: string;
  pickUpPoint: string;
  pickUpUrgencyFlag: string;
  pickUpUrgency: string;
  dropOffAddress: string;
  dropOffPoint: string;
  vehicle: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  passengerName: string;
  passengerPhone: string;
  paymentChannel: string;
  paymentBasicOptions: string[];
  paymentExtraOptions: string[];
  notesToDispatcher: string;
  notesToDriver: string;
  price: number;
  pickUpTime: moment.Moment;
  bookingTime: moment.Moment;
  status: string;
  id?: string;
}
