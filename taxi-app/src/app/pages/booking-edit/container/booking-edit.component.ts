import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ACTIVATED_ROUTE_PARAMS } from 'src/app/shared/consts/app.consts';
import { IBooking } from 'src/app/shared/models/booking.model';
import { BookingOptionsService } from 'src/app/shared/services/booking-options.service';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
import {
  LOAD_BOOKING_ACTION,
  UPDATE_BOOKING_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_CURRENT_BOOKING } from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';
import * as BookingActions from 'src/app/shared/stores/booking-store/booking.actions';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss'],
})
export class BookingEditComponent implements OnInit, OnDestroy {
  editBookingParams: IBooking;

  private sub: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IBookingState>,
    private activatedRoute: ActivatedRoute,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      LOAD_BOOKING_ACTION({
        bookingId: this.activatedRoute.snapshot.params[ACTIVATED_ROUTE_PARAMS],
      })
    );

    this.store
      .select(SELECT_CURRENT_BOOKING)
      .subscribe((currentBooking: IBooking) => {
        this.editBookingParams = currentBooking;
        console.log(this.editBookingParams);
      });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }
}
