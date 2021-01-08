import { IAdminGroup } from '../models/admin-group.model';

export const DEFAULT_ADMIN_GROUPS: IAdminGroup[] = [
  {
    id_number: 1,
    name: 'user_basic',
    privileges: ['READ_BOOKINGS'],
  },
  {
    id_number: 2,
    name: 'user_avg',
    privileges: ['CREATE_BOOKINGS', 'READ_BOOKINGS'],
  },
  {
    id_number: 3,
    name: 'user_adv',
    privileges: ['CREATE_BOOKINGS', 'READ_BOOKINGS', 'UPDATE_BOOKINGS'],
  },
  {
    id_number: 4,
    name: 'user_prem',
    privileges: [
      'CREATE_BOOKINGS',
      'READ_BOOKINGS',
      'UPDATE_BOOKINGS',
      'DELETE_BOOKINGS',
    ],
  },
  {
    id_number: 5,
    name: 'manager_basic',
    privileges: [
      'CREATE_BOOKINGS',
      'READ_BOOKINGS',
      'DELETE_BOOKINGS',
      'READ_PRIVILEGE',
    ],
  },
  {
    id_number: 6,
    name: 'manager_avg',
    privileges: [
      'CREATE_BOOKINGS',
      'READ_BOOKINGS',
      'UPDATE_BOOKINGS',
      'DELETE_BOOKINGS',
      'READ_PRIVILEGE',
    ],
  },
  {
    id_number: 7,
    name: 'manager_adv',
    privileges: [
      'CREATE_BOOKINGS',
      'READ_BOOKINGS',
      'UPDATE_BOOKINGS',
      'DELETE_BOOKINGS',
      'READ_PRIVILEGE',
      'UPDATE_PRIVILEGE',
    ],
  },
  {
    id_number: 8,
    name: 'manager_prem',
    privileges: ['READ_BOOKINGS', 'READ_PRIVILEGE', 'UPDATE_PRIVILEGE'],
  },
  {
    id_number: 9,
    name: 'management',
    privileges: [
      'READ_BOOKINGS',
      'UPDATE_BOOKINGS',
      'DELETE_BOOKINGS',
      'READ_PRIVILEGE',
      'UPDATE_PRIVILEGE',
    ],
  },
  {
    id_number: 10,
    name: 'admin',
    privileges: [
      'CREATE_BOOKINGS',
      'READ_BOOKINGS',
      'UPDATE_BOOKINGS',
      'DELETE_BOOKINGS',
      'CREATE_PRIVILEGE',
      'READ_PRIVILEGE',
      'UPDATE_PRIVILEGE',
      'DELETE_PRIVILEGE',
    ],
  },
];

export const GROUPS_DISPLAYED_COLUMNS = [
  'id_number',
  'name',
  'privileges_total',
  'action_btn',
];
