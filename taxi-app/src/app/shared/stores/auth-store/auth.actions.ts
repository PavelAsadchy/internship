import { createAction, props } from '@ngrx/store';
import { ILoggedInUser } from '../../models/loggedInUser.model';
import { IUser } from '../../models/user.model';

export enum ActionsType {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAILURE = '[AUTH] Failure',
  LOGOUT = '[AUTH] Logout',
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
