import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { IShowMessage } from '../../models/show-message.model';
import * as MessageActions from './message.actions';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  showMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MessageActions.ActionsType.SHOW_MESSAGE),
        map(
          (action: { type: string; message: IShowMessage }) => action.message
        ),
        tap((message: IShowMessage) =>
          this.snackBar.open(message.value, message.action, message.options)
        )
      ),
    { dispatch: false }
  );
}
