import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { BOOKING_LOAD_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_BOOKING_LIST } from 'src/app/shared/stores/booking-store/booking.selector';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit {
  bookingList$: Observable<IBookingOptions[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BOOKING_LOAD_ACTION());
    this.bookingList$ = this.store.pipe(select(SELECT_BOOKING_LIST));
  }
  trigger(): void {
    console.log(this.bookingList$);
    // this.store.dispatch(BOOKING_LOAD_ACTION());
    // this.bookingListService.loadBooking().subscribe((res) => console.log(res));
  }
}
