import { createAction, props } from '@ngrx/store';
import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';
import { IUser } from 'src/libs/@shared/models/user.model';

export enum ActionsType {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAILURE = '[AUTH] Failure',
  LOGOUT = '[AUTH] Logout',
  REFRESH_TOKEN = '[AUTH] Refresh Token',
  REFRESH_TOKEN_SUCCESS = '[AUTH] Refresh Token Success',
  REFRESH_TOKEN_FAILURE_ACTION = '[AUTH] Refresh Token Failure',
}

export const AUTH_LOGIN_ACTION = createAction(
  ActionsType.LOGIN,
  props<{ user: IUser }>()
);

export const AUTH_SUCCESS_ACTION = createAction(
  ActionsType.LOGIN_SUCCESS,
  props<{ loggedInUser: ILoggedInUser }>()
);

export const AUTH_FAILURE_ACTION = createAction(
  ActionsType.LOGIN_FAILURE,
  props<{ err: string }>()
);

export const AUTH_LOGOUT_ACTION = createAction(ActionsType.LOGOUT);

export const AUTH_REFRESH_TOKEN = createAction(ActionsType.REFRESH_TOKEN);

export const AUTH_REFRESH_TOKEN_SUCCESS = createAction(
  ActionsType.REFRESH_TOKEN_SUCCESS,
  props<{ jwt: string }>()
);

export const AUTH_REFRESH_TOKEN_FAILURE_ACTION = createAction(
  ActionsType.REFRESH_TOKEN_FAILURE_ACTION,
  props<{ err: string }>()
);
