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

  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.LOAD_BOOKINGS),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loadBookings })
        )
      ),
      switchMap(() => {
        return this.bookingListService.loadBookings().pipe(
          map((bookings: IBookingOptions[]) => {
            return BookingActions.BOOKINGS_LOAD_SUCCESS_ACTION({
              bookingList: bookings,
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKINGS_LOAD_FAIL_ACTION({ err: error }))
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

  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.LOAD_BOOKING),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loadBooking })
        )
      ),
      map((action: { bookingId: string; type: string }) => action.bookingId),
      switchMap((bookingId: string) => {
        return this.bookingListService.getBookingById(bookingId).pipe(
          map((booking: IBookingOptions) => {
            return BookingActions.BOOKING_LOAD_SUCCESS_ACTION({
              selectedBooking: booking,
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKING_LOAD_FAIL_ACTION({ err: error }))
          )
        );
      })
    )
  );

  loadBookingFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.LOAD_BOOKING_FAIL),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.loadBookingFail,
            })
          )
        )
      ),
    { dispatch: false }
  );

  createBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.CREATE_BOOKING),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.createBooking })
        )
      ),
      map(
        (action: { newBooking: IBookingOptions; type: string }) =>
          action.newBooking
      ),
      switchMap((newBooking: IBookingOptions) => {
        return this.bookingListService.createBooking(newBooking).pipe(
          map((booking: IBookingOptions) => {
            return BookingActions.BOOKING_CREATE_SUCCESS_ACTION({
              newBooking: booking,
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKING_CREATE_FAIL_ACTION({ err: error }))
          )
        );
      })
    )
  );

  createBookingFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.CREATE_BOOKING_FAIL),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.createBookingFail,
            })
          )
        )
      ),
    { dispatch: false }
  );

  updateBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.UPDATE_BOOKING),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.updateBooking })
        )
      ),
      map(
        (action: { booking: IBookingOptions; type: string }) => action.booking
      ),
      switchMap((booking: IBookingOptions) => {
        return this.bookingListService.updateBooking(booking).pipe(
          map((updatedBooking: IBookingOptions) => {
            return BookingActions.BOOKING_UPDATE_SUCCESS_ACTION({
              update: {
                id: updatedBooking.id,
                changes: updatedBooking,
              },
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKING_UPDATE_FAIL_ACTION({ err: error }))
          )
        );
      })
    )
  );

  updateBookingFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.UPDATE_BOOKING_FAIL),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.updateBookingFail,
            })
          )
        )
      ),
    { dispatch: false }
  );

  deleteBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.UPDATE_BOOKING),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.updateBooking })
        )
      ),
      map(
        (action: { booking: IBookingOptions; type: string }) => action.booking
      ),
      switchMap((booking: IBookingOptions) => {
        return this.bookingListService.updateBooking(booking).pipe(
          map((updatedBooking: IBookingOptions) => {
            return BookingActions.BOOKING_UPDATE_SUCCESS_ACTION({
              update: {
                id: updatedBooking.id,
                changes: updatedBooking,
              },
            });
          }),
          catchError((error) =>
            of(BookingActions.BOOKING_UPDATE_FAIL_ACTION({ err: error }))
          )
        );
      })
    )
  );

  deleteBookingFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.UPDATE_BOOKING_FAIL),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.updateBookingFail,
            })
          )
        )
      ),
    { dispatch: false }
  );
}
