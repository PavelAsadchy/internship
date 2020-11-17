import { AuthActions, AuthActionsType } from './auth.actions';
import { IAuthState, initialAuthState } from './auth.state';

export const authReducer = (
  state: IAuthState = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AuthActionsType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          username: action.payload.loggedInUser.username,
          jwt: action.payload.loggedInUser.jwt,
          refreshToken: action.payload.loggedInUser.jwt,
        },
        errorMessage: null,
      };

    case AuthActionsType.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        errorMessage: action.payload.err,
      };

    case AuthActionsType.LOGOUT:
      return initialAuthState;

    default:
      return state;
  }
};
