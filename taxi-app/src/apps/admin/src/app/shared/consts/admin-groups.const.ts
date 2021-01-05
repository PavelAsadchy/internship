import { IAdminGroup } from '../models/admin-group.model';

export const DEFAULT_ADMIN_GROUPS: IAdminGroup[] = [
  {
    id: '1',
    name: 'user_basic',
    priveleges: [''],
  },
  {
    id: '2',
    name: 'user_avg',
    priveleges: [''],
  },
  {
    id: '3',
    name: 'user_adv',
    priveleges: [''],
  },
  {
    id: '4',
    name: 'user_prem',
    priveleges: [''],
  },
  {
    id: '5',
    name: 'manager_basic',
    priveleges: [''],
  },
  {
    id: '6',
    name: 'manager_avg',
    priveleges: [''],
  },
  {
    id: '7',
    name: 'manager_adv',
    priveleges: [''],
  },
  {
    id: '8',
    name: 'manager_prem',
    priveleges: [''],
  },
  {
    id: '9',
    name: 'management',
    priveleges: [''],
  },
  {
    id: '10',
    name: 'admin',
    priveleges: [''],
  },
];

export const GROUPS_DISPLAYED_COLUMNS = [
  'id',
  'name',
  'privileges_total',
  'action_btn',
];
