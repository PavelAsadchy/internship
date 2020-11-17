import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import {
  AuthActionsType,
  AuthFailureAction,
  AuthLoginAction,
  AuthSuccessAction,
} from 'src/app/shared/store/auth-store/auth.actions';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { ITokens } from '../../models/tokens.model';
import { ILoggedInUser } from '../../models/loggedInUser.model';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN),
    map((action: AuthLoginAction) => action.payload.user),
    switchMap((payload) => {
      return this.authService
        .login({
          username: payload.username,
          password: payload.password,
        })
        .pipe(
          map((tokens: ITokens) => {
            return new AuthSuccessAction({
              loggedInUser: {
                username: payload.username,
                jwt: tokens.jwt,
                refreshToken: tokens.refreshToken,
              },
            });
          }),
          catchError((error) => of(new AuthFailureAction({ err: error })))
        );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_SUCCESS),
    take(1),
    map((action: AuthSuccessAction) => action.payload.loggedInUser),
    tap((loggedInUser: ILoggedInUser) => {
      this.authService.doLoginUser(loggedInUser);
      this.router.navigate(['/board']);
    })
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(ofType(AuthActionsType.LOGIN_FAILURE));
}
