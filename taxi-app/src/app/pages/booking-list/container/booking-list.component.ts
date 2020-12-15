import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CLEAR_BOOKINGS_ACTION,
  LOAD_BOOKINGS_ACTION,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  constructor(private store: Store<IBookingState>) {}

  ngOnInit() {
    this.store.dispatch(CLEAR_BOOKINGS_ACTION());
  }

  // refreshQueryParams() {
  //   this.store.dispatch(
  //     REFRESH_QUERY_PARAMS_ACTION({ params: this.currentQueryParams })
  //   );
  // }
}
