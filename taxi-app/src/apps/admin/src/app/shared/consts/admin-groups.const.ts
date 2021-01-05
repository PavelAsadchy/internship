import { IAdminGroup } from '../models/admin-group.model';

export const DEFAULT_ADMIN_GROUPS: IAdminGroup[] = [
  {
    id: '1',
    name: 'user_basic',
    privileges: [''],
  },
  {
    id: '2',
    name: 'user_avg',
    privileges: [''],
  },
  {
    id: '3',
    name: 'user_adv',
    privileges: [''],
  },
  {
    id: '4',
    name: 'user_prem',
    privileges: [''],
  },
  {
    id: '5',
    name: 'manager_basic',
    privileges: [''],
  },
  {
    id: '6',
    name: 'manager_avg',
    privileges: [''],
  },
  {
    id: '7',
    name: 'manager_adv',
    privileges: [''],
  },
  {
    id: '8',
    name: 'manager_prem',
    privileges: [''],
  },
  {
    id: '9',
    name: 'management',
    privileges: [''],
  },
  {
    id: '10',
    name: 'admin',
    privileges: [''],
  },
];

export const GROUPS_DISPLAYED_COLUMNS = [
  'id',
  'name',
  'privileges_total',
  'action_btn',
];
