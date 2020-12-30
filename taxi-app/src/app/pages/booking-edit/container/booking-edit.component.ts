import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBooking } from 'src/app/shared/models/booking.model';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';
import {
  CLEAR_SELECTED_BOOKING_ACTION,
  LOAD_BOOKING_ACTION,
  UPDATE_BOOKING_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import {
  SELECT_BOOKING_LOADING,
  SELECT_CURRENT_BOOKING,
} from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss'],
})
export class BookingEditComponent implements OnInit, OnDestroy {
  editBookingParams: IBooking;
  isLoading$: Observable<boolean>;

  constructor(
    private readonly unsubscribeService: UnsubscribeService,
    private store: Store<IBookingState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribeService.subscription()))
      .subscribe((routeParams: { id: string }) => {
        this.store.dispatch(
          LOAD_BOOKING_ACTION({
            bookingId: routeParams.id,
          })
        );
        this.store
          .select(SELECT_CURRENT_BOOKING)
          .pipe(takeUntil(this.unsubscribeService.subscription()))
          .subscribe((currentBooking: IBooking) => {
            this.editBookingParams = currentBooking;
          });
      });
    this.isLoading$ = this.store.select(SELECT_BOOKING_LOADING);
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
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
