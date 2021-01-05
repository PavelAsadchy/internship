import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';

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
