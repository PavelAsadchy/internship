import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { IAuthState, INITIAL_AUTH_STATE } from './auth.state';

const authReducer = createReducer(
  INITIAL_AUTH_STATE,
  on(AuthActions.AUTH_SUCCESS_ACTION, (state, { loggedInUser }) => ({
    ...state,
    isLoggedIn: true,
    user: {
      username: loggedInUser.username,
      jwt: loggedInUser.jwt,
      refreshToken: loggedInUser.refreshToken,
    },
    errorMessage: null,
  })),
  on(AuthActions.AUTH_FAILURE_ACTION, (state, { err }) => ({
    ...state,
    isLoggedIn: false,
    user: null,
    errorMessage: err,
  })),
  on(AuthActions.AUTH_LOGOUT_ACTION, (state) => INITIAL_AUTH_STATE)
);

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
