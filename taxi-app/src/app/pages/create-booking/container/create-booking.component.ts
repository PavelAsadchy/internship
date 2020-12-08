import { Component } from '@angular/core';
import { DEFAULT_BOOKING_PARAMS } from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent {
  defaultBookingParams: IBooking = DEFAULT_BOOKING_PARAMS;
}
