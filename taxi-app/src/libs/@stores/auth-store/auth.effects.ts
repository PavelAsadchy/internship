import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/libs/@shared/services/auth.service';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IUserAuthorized } from 'src/libs/@shared/models/tokens.model';
import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';
import { of } from 'rxjs';
import { IUser } from 'src/libs/@shared/models/user.model';
import { Store } from '@ngrx/store';
import { SHOW_MESSAGE_ACTION } from '../message-store/message.actions';
import { SHOW_MESSAGE_VALUES } from 'src/libs/@shared/consts/store.consts';
import { IMessageState } from '../message-store/message.state';
import { IUserNew } from 'src/libs/@shared/models/user-new.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private router: Router,
    private store: Store<IMessageState>
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.ActionsType.SIGNUP),
      map((action: { newUser: IUserNew; type: string }) => action.newUser),
      switchMap((newUser: IUserNew) => {
        return this.authService
          .signup({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
          })
          .pipe(
            map(() => {
              return AuthActions.AUTH_LOGIN_ACTION({
                user: {
                  username: newUser.username,
                  password: newUser.password,
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
            map((authorizedUser: IUserAuthorized) => {
              return AuthActions.AUTH_SUCCESS_ACTION({
                loggedInUser: {
                  username: authorizedUser.username,
                  jwt: authorizedUser.jwt,
                  refreshToken: authorizedUser.refreshToken,
                  roles: authorizedUser.roles,
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
          this.router.navigate(['']);
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loginSuccess })
          );
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGIN_FAILURE),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loginFailure })
          )
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.ActionsType.LOGOUT),
        tap(() => {
          this.authService.logout();
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.logout })
          );
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
