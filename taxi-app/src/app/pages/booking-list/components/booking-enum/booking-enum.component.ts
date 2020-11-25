import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { BookingListService } from 'src/app/shared/services/booking-list.service';
import { BOOKINGS_LOAD_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit {
  bookingList$: Observable<IBookingOptions[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<IBookingState>,
    private bookingListService: BookingListService
  ) {}

  ngOnInit() {
    this.store.dispatch(BOOKINGS_LOAD_ACTION());
    this.bookingList$ = this.store.pipe(select(SELECT_BOOKING_LIST));
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }
  trigger(): void {
    console.log(this.bookingList$);
    this.store.dispatch(BOOKINGS_LOAD_ACTION());
    this.bookingListService.loadBookings().subscribe((res) => console.log(res));
  }
}
