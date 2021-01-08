import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  IPaginateParams,
  IQueryParams,
  ISortParams,
} from 'src/libs/@shared/models/query-params.model';
import { IAdminGroup } from '../../models/admin-group.model';

export interface IAdminState extends EntityState<IAdminGroup> {
  selectedAdminGroup: IAdminGroup;
  isDetailBarOpen: boolean;
  queryParams: IQueryParams;
  totalLength: number;
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
}

export const adminAdapter: EntityAdapter<IAdminGroup> = createEntityAdapter<IAdminGroup>();

export const DEFAULT_ADMIN_GROUPS_SORT_PARAMS: ISortParams = {
  field: 'id_number',
  direction: 'asc',
};

export const DEFAULT_ADMIN_GROUPS_PAGINATE_PARAMS: IPaginateParams = {
  pageIndex: 0,
  pageSize: 5,
};

export const DEFAULT_ADMIN_GROUPS_QUERY_PARAMS: IQueryParams = {
  sort: DEFAULT_ADMIN_GROUPS_SORT_PARAMS,
  paginate: DEFAULT_ADMIN_GROUPS_PAGINATE_PARAMS,
};

export const DEFAULT_ADMIN_STATE: IAdminState = {
  ids: [],
  entities: {},
  selectedAdminGroup: null,
  isDetailBarOpen: false,
  queryParams: DEFAULT_ADMIN_GROUPS_QUERY_PARAMS,
  totalLength: null,
  loading: false,
  loaded: false,
  errorMessage: null,
};

export const INITIAL_ADMIN_STATE: IAdminState = adminAdapter.getInitialState(
  DEFAULT_ADMIN_STATE
);
