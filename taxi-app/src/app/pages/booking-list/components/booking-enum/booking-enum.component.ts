import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { BOOKINGS_LOAD_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LIST,
  SELECT_BOOKING_LOADING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import { DeleteBookingConfirmComponent } from '../delete-booking-confirm/delete-booking-confirm.component';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
})
export class BookingEnumComponent implements OnInit {
  bookingList$: Observable<IBookingOptions[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<IBookingState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(BOOKINGS_LOAD_ACTION());
    this.bookingList$ = this.store.pipe(select(SELECT_BOOKING_LIST));
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }
  trigger(): void {
    this.dialog.open(DeleteBookingConfirmComponent);
  }
}
