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

export const LOAD_GROUP_PRIVILEGES_ACTION = createAction(
  ActionsType.LOAD_GROUP_PRIVILEGES,
  props<{ adminGroupId: string }>()
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
