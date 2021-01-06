import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { IShowMessage } from 'src/libs/@shared/models/show-message.model';
import { IAdminGroup } from '../../models/admin-group.model';
import { IServerAdminResponse } from '../../models/server-admin-response';

export enum ActionsType {
  LOAD_ADMIN_GROUPS = '[ADMIN] Load Admin Groups',
  LOAD_ADMIN_GROUPS_SUCCESS = '[ADMIN] Load Admin Groups Success',
  LOAD_ADMIN_GROUPS_FAIL = '[ADMIN] Load Admin Groups Fail',
  REFRESH_ADMIN_GROUPS_QUERY_PARAMS = '[ADMIN] Refresh Admin Groups Query Params',
  TOGGLE_DETAIL_BAR = '[ADMIN] Open Detail Bar',
  SET_ADMIN_GROUP = '[ADMIN] Set Admin Group',
  LOAD_GROUP_PRIVILEGES = '[ADMIN] Load Admin Group',
  LOAD_GROUP_PRIVILEGES_SUCCESS = '[ADMIN] Load Admin Group Success',
  LOAD_GROUP_PRIVILEGES_FAIL = '[ADMIN] Load Admin Group Fail',
  UPDATE_GROUP_PRIVILEGES = '[ADMIN] Update Admin Group',
  UPDATE_GROUP_PRIVILEGES_SUCCESS = '[ADMIN] Update Admin Group Success',
  UPDATE_GROUP_PRIVILEGES_FAIL = '[ADMIN] Update Admin Group Fail',
}

export const LOAD_ADMIN_GROUPS_ACTION = createAction(
  ActionsType.LOAD_ADMIN_GROUPS,
  props<{ params: IQueryParams }>()
);

export const LOAD_ADMIN_GROUPS_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_ADMIN_GROUPS_SUCCESS,
  props<{ serverResponse: IServerAdminResponse }>()
);

export const LOAD_ADMIN_GROUPS_FAIL_ACTION = createAction(
  ActionsType.LOAD_ADMIN_GROUPS_FAIL,
  props<{ message: IShowMessage }>()
);

export const REFRESH_ADMIN_GROUPS_QUERY_PARAMS_ACTION = createAction(
  ActionsType.REFRESH_ADMIN_GROUPS_QUERY_PARAMS,
  props<{ params: IQueryParams }>()
);

export const TOGGLE_DETAIL_BAR_ACTION = createAction(
  ActionsType.TOGGLE_DETAIL_BAR,
  props<{ isDetailBarOpen: boolean }>()
);

export const SET_ADMIN_GROUP_ACTION = createAction(
  ActionsType.SET_ADMIN_GROUP,
  props<{ adminGroup: IAdminGroup }>()
);

export const LOAD_GROUP_PRIVILEGES_ACTION = createAction(
  ActionsType.LOAD_GROUP_PRIVILEGES,
  props<{ adminGroupId: number }>()
);

export const LOAD_GROUP_PRIVILEGES_SUCCESS_ACTION = createAction(
  ActionsType.LOAD_GROUP_PRIVILEGES_SUCCESS,
  props<{ selectedAdminGroup: IAdminGroup }>()
);

export const LOAD_GROUP_PRIVILEGES_FAIL_ACTION = createAction(
  ActionsType.LOAD_GROUP_PRIVILEGES_FAIL,
  props<{ message: IShowMessage }>()
);

export const UPDATE_GROUP_PRIVILEGES_ACTION = createAction(
  ActionsType.UPDATE_GROUP_PRIVILEGES,
  props<{ adminGroup: IAdminGroup }>()
);

export const UPDATE_GROUP_PRIVILEGES_SUCCESS_ACTION = createAction(
  ActionsType.UPDATE_GROUP_PRIVILEGES_SUCCESS,
  props<{ update: Update<IAdminGroup> }>()
);

export const UPDATE_ADMIN_GROUP_FAIL_ACTION = createAction(
  ActionsType.UPDATE_GROUP_PRIVILEGES_FAIL,
  props<{ message: IShowMessage }>()
);
