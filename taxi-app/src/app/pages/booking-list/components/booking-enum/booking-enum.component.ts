import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookingOptions } from 'src/app/shared/models/booking-options.model';
import { BookingListService } from 'src/app/shared/services/booking-list.service';
import { BOOKING_LOAD_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_BOOKING_LIST } from 'src/app/shared/stores/booking-store/booking.selector';

@Component({
  selector: 'app-booking-enum',
  templateUrl: './booking-enum.component.html',
  styleUrls: ['./booking-enum.component.scss'],
  providers: [BookingListService],
})
export class BookingEnumComponent implements OnInit {
  bookingList$: Observable<IBookingOptions[]>;

  constructor(
    private store: Store,
    private bookingListService: BookingListService,
    private fb: AngularFirestore
  ) {}

  ngOnInit() {
    // this.store.dispatch(BOOKING_LOAD_ACTION());
    this.bookingList$ = this.store.pipe(select(SELECT_BOOKING_LIST));
  }
  trigger(): void {
    this.store.dispatch(BOOKING_LOAD_ACTION());
    // this.bookingListService.loadBooking().subscribe((res) => console.log(res));
  }
}
