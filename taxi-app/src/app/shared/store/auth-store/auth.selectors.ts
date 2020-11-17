import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const selectAuthFeature = createFeatureSelector<IAuthState>('auth');

export const selectAuthUser = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.user.username
);
