import { createAction, props } from '@ngrx/store';

export enum ActionsType {
  ON_LOGIN_SUCCESS = '[MESSAGE] On Login Success',
  ON_LOGIN_FAILURE = '[MESSAGE] On Login Failure',
  ON_LOGOUT = '[MESSAGE] On Logout',
}

export const MESSAGE_ON_LOGIN_SUCCESS_ACTION = createAction(
  ActionsType.ON_LOGIN_SUCCESS
);

export const MESSAGE_ON_LOGIN_FAILURE_ACTION = createAction(
  ActionsType.ON_LOGIN_FAILURE,
  props<{ err: string }>()
);

export const MESSAGE_ON_LOGOUT = createAction(ActionsType.ON_LOGOUT);
