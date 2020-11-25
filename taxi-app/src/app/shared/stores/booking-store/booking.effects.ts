import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { SHOW_MESSAGE_VALUES } from '../../consts/consts';
import { IBookingOptions } from '../../models/booking-options.model';
import { BookingListService } from '../../services/booking-list.service';
import { SHOW_MESSAGE_ACTION } from '../message-store/message.actions';
import * as BookingActions from './booking.actions';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private readonly bookingListService: BookingListService
  ) {}

  // loadBookings$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(BookingActions.ActionsType.LOAD_BOOKINGS),
  //       tap((action) => {
  //         console.log(action);
  //         this.bookingListService
  //           .loadBooking()
  //           .subscribe((res) => console.log(res));
  //       })
  //     ),
  //   { dispatch: false }
  // );

  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.LOAD_BOOKINGS),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loadBookings })
        )
      ),
      switchMap(() => {
        return this.bookingListService.loadBooking().pipe(
          map((bookings: IBookingOptions[]) => {
            return BookingActions.BOOKING_LOAD_SUCCESS_ACTION({
              bookingList: bookings,
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKING_LOAD_FAIL_ACTION({ err: error }))
          )
        );
      })
    )
  );

  loadBookingsFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.LOAD_BOOKINGS_FAIL),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.loadBookingsFail,
            })
          )
        )
      ),
    { dispatch: false }
  );
}
