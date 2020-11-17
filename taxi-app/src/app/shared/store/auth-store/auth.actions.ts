import { Action } from '@ngrx/store';
import { ILoggedInUser } from '../../models/loggedInUser.model';
import { IUser } from '../../models/user.model';

export enum AuthActionsType {
  LOGIN = '[AUTH] login',
  LOGIN_SUCCESS = '[AUTH] login success',
  LOGIN_FAILURE = '[AUTH] failure',
  LOGOUT = '[AUTH] logout',
}

export class AuthLoginAction implements Action {
  readonly type = AuthActionsType.LOGIN;
  constructor(public payload: { user: IUser }) {}
}

export class AuthSuccessAction {
  readonly type = AuthActionsType.LOGIN_SUCCESS;
  constructor(public payload: { loggedInUser: ILoggedInUser }) {}
}

export class AuthFailureAction {
  readonly type = AuthActionsType.LOGIN_FAILURE;
  constructor(public payload: { err: string }) {}
}

export class AuthLogoutAction implements Action {
  readonly type = AuthActionsType.LOGOUT;
}

export type AuthActions =
  | AuthLoginAction
  | AuthSuccessAction
  | AuthFailureAction
  | AuthLogoutAction;
