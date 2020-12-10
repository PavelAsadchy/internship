import { Component } from '@angular/core';
import { DEFAULT_BOOKING_PARAMS } from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss'],
})
export class BookingCreateComponent {
  defaultBookingParams: IBooking = DEFAULT_BOOKING_PARAMS;
}
