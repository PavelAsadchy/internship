import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ITokens } from '../../models/tokens.model';
import { ILoggedInUser } from '../../models/loggedInUser.model';
import { of } from 'rxjs';
import { IUser } from '../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACKBAR_OPTIONS } from '../../consts/consts';
import { Store } from '@ngrx/store';
import {
  MESSAGE_ON_LOGIN_FAILURE_ACTION,
  MESSAGE_ON_LOGIN_SUCCESS_ACTION,
  MESSAGE_ON_LOGOUT,
} from '../message-store/message.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.LOGIN),
      map((action: { user: IUser; type: string }) => action.user),
      switchMap((user: IUser) => {
        return this.authService
          .login({
            username: user.username,
            password: user.password,
          })
          .pipe(
            map((tokens: ITokens) => {
              return AuthActions.AUTH_SUCCESS_ACTION({
                loggedInUser: {
                  username: user.username,
                  jwt: tokens.jwt,
                  refreshToken: tokens.refreshToken,
                },
              });
            }),
            catchError((error) =>
              of(AuthActions.AUTH_FAILURE_ACTION({ err: error }))
            )
          );
      })
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGIN_SUCCESS),
        map(
          (action: { loggedInUser: ILoggedInUser; type: string }) =>
            action.loggedInUser
        ),
        tap((loggedInUser: ILoggedInUser) => {
          this.authService.doLoginUser(loggedInUser);
          this.router.navigate(['/board']);
          this.store.dispatch(MESSAGE_ON_LOGIN_SUCCESS_ACTION());
          // this.snackBar.open('Welcome', 'Ok', {
          //   duration: SNACKBAR_OPTIONS.duration,
          //   horizontalPosition: SNACKBAR_OPTIONS.horizontalPosition,
          //   verticalPosition: SNACKBAR_OPTIONS.verticalPosition
          // });
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGIN_FAILURE),
        map((action: { type: string; err: string }) => action.err),
        tap((err) =>
          this.store.dispatch(MESSAGE_ON_LOGIN_FAILURE_ACTION({ err: err }))
        )
        // tap(() => this.snackBar.open('Wrong data', 'Try again', {
        //   duration: SNACKBAR_OPTIONS.duration,
        //   horizontalPosition: SNACKBAR_OPTIONS.horizontalPosition,
        //   verticalPosition: SNACKBAR_OPTIONS.verticalPosition
        // }))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGOUT),
        tap(() => {
          this.authService.logout();
          this.store.dispatch(MESSAGE_ON_LOGOUT());
          // this.snackBar.open('Come back later', 'Ok', {
          //   duration: SNACKBAR_OPTIONS.duration,
          //   horizontalPosition: SNACKBAR_OPTIONS.horizontalPosition,
          //   verticalPosition: SNACKBAR_OPTIONS.verticalPosition
          // })
        })
      ),
    { dispatch: false }
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.REFRESH_TOKEN),
      switchMap(() => {
        return this.authService.refreshToken().pipe(
          map((jwt: string) => {
            return AuthActions.AUTH_REFRESH_TOKEN_SUCCESS({ jwt });
          }),
          catchError((error) =>
            of(AuthActions.AUTH_REFRESH_TOKEN_FAILURE_ACTION({ err: error }))
          )
        );
      })
    )
  );

  refreshTokenSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.REFRESH_TOKEN_SUCCESS),
        tap((jwt: string) => {
          this.authService.storeJwtToken(jwt);
        })
      ),
    { dispatch: false }
  );

  refreshTokenFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.REFRESH_TOKEN_FAILURE_ACTION)
      ),
    { dispatch: false }
  );
}
