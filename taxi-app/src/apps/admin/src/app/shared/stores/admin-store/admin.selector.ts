import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminAdapter, IAdminState } from './admin.state';

export const FEATURE_KEY = 'admin';

export const SELECT_ADMIN_FEATURE = createFeatureSelector<IAdminState>(
  FEATURE_KEY
);

export const SELECT_ADMIN_GROUPS = createSelector(
  SELECT_ADMIN_FEATURE,
  adminAdapter.getSelectors().selectAll
);

export const SELECT_ADMIN_LOADING = createSelector(
  SELECT_ADMIN_FEATURE,
  (state: IAdminState) => state.loading
);

export const SELECT_CURRENT_GROUP = createSelector(
  SELECT_ADMIN_FEATURE,
  (state: IAdminState) => state.selectedAdminGroup
);

export const SELECT_ADMIN_GROUPS_QUERY_PARAMS = createSelector(
  SELECT_ADMIN_FEATURE,
  (state: IAdminState) => state.queryParams
);

export const SELECT_ADMIN_GROUPS_LENGTH = createSelector(
  SELECT_ADMIN_FEATURE,
  (state: IAdminState) => state.totalLength
);
