import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DEFAULT_BOOKING_PARAMS } from 'src/app/shared/consts/booking-options.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { CREATE_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss'],
})
export class BookingCreateComponent {
  defaultBookingParams: IBooking = DEFAULT_BOOKING_PARAMS;

  constructor(private store: Store<IBookingState>) {}

  bookingCreateHandler(newBooking: IBooking) {
    this.store.dispatch(CREATE_BOOKING_ACTION({ newBooking }));
  }
}
