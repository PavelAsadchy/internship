export interface IBooking {
  bookingChannel: string;
  pickUpAddress: string;
  pickUpPoint: string;
  pickUpUrgencyFlag: string;
  pickUpUrgency?: string;
  dropOffAddress: string;
  dropOffPoint: string;
  vehicle: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  passengerName: string;
  passengerPhone: string;
  paymentChannel: string;
  paymentType: string;
  paymentBasicOptions: string[];
  paymentExtraOptions: string[];
  notesToDispatcher: string;
  notesToDriver: string;
  price?: number;
  pickUpTime?: string;
  bookingTime?: string;
  status?: string;
  id?: string;
}
