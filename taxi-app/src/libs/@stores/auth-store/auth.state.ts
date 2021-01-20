import { LOCAL_STORAGE_DATA } from 'src/libs/@shared/consts/app.consts';
import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';

export interface IAuthState {
  isLoggedIn: boolean;
  user: ILoggedInUser;
  errorMessage: string;
}

export const INITIAL_AUTH_STATE = (): IAuthState => {
  if (localStorage.getItem(LOCAL_STORAGE_DATA.USER_NAME)) {
    return {
      isLoggedIn: true,
      user: {
        username: localStorage.getItem(LOCAL_STORAGE_DATA.USER_NAME),
        jwt: localStorage.getItem(LOCAL_STORAGE_DATA.JWT_TOKEN),
        refreshToken: localStorage.getItem(LOCAL_STORAGE_DATA.REFRESH_TOKEN),
        roles: JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA.ROLES)),
      },
      errorMessage: null,
    };
  } else
    return {
      isLoggedIn: false,
      user: null,
      errorMessage: null,
    };
};
