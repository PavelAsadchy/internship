import { ILoggedInUser } from '../../models/loggedInUser.model';
import { authReducer } from './auth.reducer';

export interface IAuthState {
  isLoggedIn: boolean;
  user: ILoggedInUser;
  errorMessage: string;
}

export const initialAuthState: IAuthState = {
  isLoggedIn: false,
  user: null,
  errorMessage: null,
};

export const reducers = {
  auth: authReducer,
};
