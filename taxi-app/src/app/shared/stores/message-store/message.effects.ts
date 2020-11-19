import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { SNACKBAR_OPTIONS } from '../../consts/consts';
import * as MessageActions from './message.actions';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  loginSuccessMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessageActions.ActionsType.ON_LOGIN_SUCCESS),
        tap(() => this.snackBar.open('Welcome', 'Ok', SNACKBAR_OPTIONS))
      ),
    { dispatch: false }
  );

  loginFailureMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessageActions.ActionsType.ON_LOGIN_FAILURE),
        map((action: { type: string; err: string }) => action.err),
        tap((err: string) =>
          this.snackBar.open(err, 'Try again', SNACKBAR_OPTIONS)
        )
      ),
    { dispatch: false }
  );

  logoutMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessageActions.ActionsType.ON_LOGOUT),
        tap(() => this.snackBar.open('Come back later', 'Ok', SNACKBAR_OPTIONS))
      ),
    { dispatch: false }
  );
}
