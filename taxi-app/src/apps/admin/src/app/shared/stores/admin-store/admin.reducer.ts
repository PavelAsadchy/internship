import { Action, createReducer, on } from '@ngrx/store';
import { adminAdapter, IAdminState, INITIAL_ADMIN_STATE } from './admin.state';
import * as AdminActions from './admin.actions';

const adminReducer = createReducer(
  INITIAL_ADMIN_STATE,
  on(AdminActions.LOAD_ADMIN_GROUPS_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    AdminActions.LOAD_ADMIN_GROUPS_SUCCESS_ACTION,
    (state, { serverResponse }) => {
      return adminAdapter.setAll(serverResponse.adminGroups, {
        ...state,
        totalLength: serverResponse.totalLength,
        loading: false,
        loaded: true,
        errorMessage: null,
      });
    }
  ),
  on(AdminActions.LOAD_ADMIN_GROUPS_FAIL_ACTION, (state, { message }) => ({
    ...state,
    totalLength: 0,
    entities: {},
    loading: false,
    loaded: false,
    errorMessage: message.value,
  })),

  on(
    AdminActions.REFRESH_ADMIN_GROUPS_QUERY_PARAMS_ACTION,
    (state, { params }) => ({
      ...state,
      queryParams: {
        ...state.queryParams,
        ...params,
      },
    })
  ),

  on(AdminActions.LOAD_GROUP_PRIVILEGES_ACTION, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    AdminActions.LOAD_GROUP_PRIVILEGES_SUCCESS_ACTION,
    (state, { selectedAdminGroup }) => ({
      ...state,
      selectedAdminGroup,
      loading: false,
      loaded: true,
    })
  ),
  on(AdminActions.LOAD_GROUP_PRIVILEGES_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  })),

  on(
    AdminActions.UPDATE_GROUP_PRIVILEGES_SUCCESS_ACTION,
    (state, { update }) => {
      return adminAdapter.updateOne(update, state);
    }
  ),
  on(AdminActions.UPDATE_ADMIN_GROUP_FAIL_ACTION, (state, { message }) => ({
    ...state,
    errorMessage: message.value,
  }))
);

export function reducer(state: IAdminState | undefined, action: Action) {
  return adminReducer(state, action);
}
