import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IBooking } from 'src/app/shared/models/booking.model';
import { LOAD_BOOKING_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
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

  private sub: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IBookingState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.sub))
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
    this.sub.next();
    this.sub.complete();
  }
}
