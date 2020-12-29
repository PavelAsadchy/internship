import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBooking } from 'apps/booking/src/app/shared/models/booking.model';
import { UnsubscribeService } from 'apps/booking/src/app/shared/services/unsubscribe.service';
import {
  CLEAR_SELECTED_BOOKING_ACTION,
  LOAD_BOOKING_ACTION,
  UPDATE_BOOKING_ACTION,
} from 'apps/booking/src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LOADING,
  SELECT_CURRENT_BOOKING,
} from 'apps/booking/src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'apps/booking/src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss'],
})
export class BookingEditComponent extends UnsubscribeService implements OnInit {
  editBookingParams: IBooking;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<IBookingState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((routeParams: { id: string }) => {
        this.store.dispatch(
          LOAD_BOOKING_ACTION({
            bookingId: routeParams.id,
          })
        );
        this.store
          .select(SELECT_CURRENT_BOOKING)
          .subscribe((currentBooking: IBooking) => {
            this.editBookingParams = currentBooking;
          });
      });
    this.isLoading$ = this.store.select(SELECT_BOOKING_LOADING);
  }

  ngOnDestroy(): void {
    this.store.dispatch(CLEAR_SELECTED_BOOKING_ACTION());
  }

  bookingEditHandler(editedBooking: IBooking) {
    this.store.dispatch(
      UPDATE_BOOKING_ACTION({
        booking: { ...editedBooking, id: this.editBookingParams.id },
      })
    );

    this.router.navigate(['board', 'booking', 'list']);
  }
}
