import { ILoggedInUser } from '../../models/loggedInUser.model';

export interface IAuthState {
  isLoggedIn: boolean;
  user: ILoggedInUser;
  errorMessage: string;
}

export const INITIAL_AUTH_STATE: IAuthState = {
  isLoggedIn: false,
  user: null,
  errorMessage: null,
};
