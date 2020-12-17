import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { SHOW_MESSAGE_VALUES } from '../../consts/store.consts';
import { IServerResponse } from '../../models/server-response.model';
import { IBooking } from '../../models/booking.model';
import { IQueryParams } from '../../models/query-params.model';
import { IShowMessage } from '../../models/show-message.model';
import { BookingListService } from '../../services/booking-list.service';
import { SHOW_MESSAGE_ACTION } from '../message-store/message.actions';
import * as BookingActions from './booking.actions';
import { IMessageState } from '../message-store/message.state';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IMessageState>,
    private readonly bookingListService: BookingListService
  ) {}

  loadBookingsByQuery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.LOAD_BOOKINGS_BY_QUERY),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loadBookings })
        )
      ),
      switchMap((action: { params: IQueryParams; type: string }) => {
        return this.bookingListService.loadBookingsByQuery(action.params).pipe(
          map((serverResponse: IServerResponse) => {
            return BookingActions.LOAD_BOOKINGS_BY_QUERY_SUCCESS({
              serverResponse,
            });
          }),
          catchError(() =>
            of(
              BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL({
                message: SHOW_MESSAGE_VALUES.loadBookingsFail,
              })
            )
          )
        );
      })
    )
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
          map((booking: IBooking) => {
            return BookingActions.LOAD_BOOKING_SUCCESS_ACTION({
              selectedBooking: booking,
            });
          }),
          catchError(() =>
            of(
              BookingActions.LOAD_BOOKING_FAIL_ACTION({
                message: SHOW_MESSAGE_VALUES.loadBookingFail,
              })
            )
          )
        );
      })
    )
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
        (action: { newBooking: IBooking; type: string }) => action.newBooking
      ),
      switchMap((newBooking: IBooking) => {
        return this.bookingListService.createBooking(newBooking).pipe(
          map((booking: IBooking) => {
            return BookingActions.CREATE_BOOKING_SUCCESS_ACTION({
              newBooking: booking,
            });
          }),
          catchError(() =>
            of(
              BookingActions.CREATE_BOOKING_FAIL_ACTION({
                message: SHOW_MESSAGE_VALUES.createBookingFail,
              })
            )
          )
        );
      })
    )
  );

  updateBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.UPDATE_BOOKING),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.updateBooking })
        )
      ),
      map((action: { booking: IBooking; type: string }) => action.booking),
      switchMap((booking: IBooking) => {
        return this.bookingListService.updateBooking(booking).pipe(
          map((updatedBooking: IBooking) => {
            return BookingActions.UPDATE_BOOKING_SUCCESS_ACTION({
              update: {
                id: updatedBooking.id,
                changes: updatedBooking,
              },
            });
          }),
          catchError(() =>
            of(
              BookingActions.UPDATE_BOOKING_FAIL_ACTION({
                message: SHOW_MESSAGE_VALUES.updateBookingFail,
              })
            )
          )
        );
      })
    )
  );

  deleteBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.ActionsType.DELETE_BOOKING),
      map((action: { bookingId: string; type: string }) => action.bookingId),
      switchMap((id: string) => {
        return this.bookingListService.deleteBooking(id).pipe(
          map(() => {
            return BookingActions.DELETE_BOOKING_SUCCESS_ACTION({
              bookingId: id,
            });
          }),
          catchError(() =>
            of(
              BookingActions.DELETE_BOOKING_FAIL_ACTION({
                message: SHOW_MESSAGE_VALUES.deleteBookingFail,
              })
            )
          )
        );
      })
    )
  );

  deleteBookingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BookingActions.ActionsType.DELETE_BOOKING_SUCCESS),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.deleteBookingSuccess,
            })
          )
        )
      ),
    { dispatch: false }
  );

  bookingActionsFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          BookingActions.ActionsType.LOAD_BOOKINGS_BY_QUERY_FAIL,
          BookingActions.ActionsType.LOAD_BOOKING_FAIL,
          BookingActions.ActionsType.CREATE_BOOKING_FAIL,
          BookingActions.ActionsType.UPDATE_BOOKING_FAIL,
          BookingActions.ActionsType.DELETE_BOOKING_FAIL
        ),
        tap((action: { message: IShowMessage; type: string }) =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: action.message,
            })
          )
        )
      ),
    { dispatch: false }
  );
}
