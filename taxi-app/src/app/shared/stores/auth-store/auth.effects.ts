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

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private router: Router
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
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () => this.actions$.pipe(ofType(AuthActions.ActionsType.LOGIN_FAILURE)),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGOUT),
        tap(() => this.authService.logout())
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
