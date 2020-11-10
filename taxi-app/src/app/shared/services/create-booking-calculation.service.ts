import { Injectable } from '@angular/core';
import { BookingOptionsType } from '../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class CreateBookingCalculationService {

  bookingOptions = BookingOptionsType;

  keys: any[];

  constructor () {
    this.keys = Object.keys(this.bookingOptions);
  }

  trigger(): void {
    console.log(this.bookingOptions);
  }
}
