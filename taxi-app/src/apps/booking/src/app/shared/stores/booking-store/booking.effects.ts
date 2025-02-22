import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { SHOW_MESSAGE_VALUES } from 'src/libs/@shared/consts/store.consts';
import { IServerResponse } from '../../models/server-response.model';
import { IBooking } from '../../models/booking.model';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { IShowMessage } from 'src/libs/@shared/models/show-message.model';
import { BookingListService } from '../../services/booking-list.service';
import { SHOW_MESSAGE_ACTION } from 'src/libs/@stores/message-store/message.actions';
import * as BookingActions from './booking.actions';
import { IMessageState } from 'src/libs/@stores/message-store/message.state';

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
            return BookingActions.LOAD_BOOKINGS_BY_QUERY_SUCCESS_ACTION({
              serverResponse,
            });
          }),
          catchError((err) => {
            if (err.message) {
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              );
            }
            // Different notification for educational purposes
            else
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionWarning,
                    value: `Client-side ERROR: ${err}`,
                  },
                })
              );
          })
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
          catchError((err) => {
            if (err.message) {
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              );
            } else
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionWarning,
                    value: `Client-side ERROR: ${err}`,
                  },
                })
              );
          })
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
          catchError((err) => {
            if (err.message) {
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              );
            } else
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionWarning,
                    value: `Client-side ERROR: ${err}`,
                  },
                })
              );
          })
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
          catchError((err) => {
            if (err.message) {
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              );
            } else
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionWarning,
                    value: `Client-side ERROR: ${err}`,
                  },
                })
              );
          })
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
          catchError((err) => {
            if (err.message) {
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              );
            } else
              return of(
                BookingActions.LOAD_BOOKINGS_BY_QUERY_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionWarning,
                    value: `Client-side ERROR: ${err}`,
                  },
                })
              );
          })
        );
      })
    )
  );

  bookingActionsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          BookingActions.ActionsType.LOAD_BOOKINGS_BY_QUERY_SUCCESS,
          BookingActions.ActionsType.LOAD_BOOKING_SUCCESS,
          BookingActions.ActionsType.CREATE_BOOKING_SUCCESS,
          BookingActions.ActionsType.UPDATE_BOOKING_SUCCESS,
          BookingActions.ActionsType.DELETE_BOOKING_SUCCESS
        ),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.defaultActionSuccess,
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
