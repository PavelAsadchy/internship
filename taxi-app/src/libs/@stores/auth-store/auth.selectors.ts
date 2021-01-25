import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const FEATURE_KEY = 'auth';

export const SELECT_AUTH_FEATURE = createFeatureSelector<IAuthState>(
  FEATURE_KEY
);

export const SELECT_AUTH_USER_PROFILE = createSelector(
  SELECT_AUTH_FEATURE,
  (state: IAuthState) => state.user
);

export const SELECT_AUTH_USERNAME = createSelector(
  SELECT_AUTH_FEATURE,
  (state: IAuthState) => (state.user ? state.user.username : null)
);
