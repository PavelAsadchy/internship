import { Chbx } from '../models/privilege.model';

export enum PrivilegeOptions {
  CREATE_BOOKINGS,
  READ_BOOKINGS,
  UPDATE_BOOKINGS,
  DELETE_BOOKINGS,
  CREATE_PRIVILEGE,
  READ_PRIVILEGE,
  UPDATE_PRIVILEGE,
  DELETE_PRIVILEGE,
}

export const PRIVILEGE_OPTIONS: Chbx[] = [
  {
    name: 'Create bookings',
    value: PrivilegeOptions[PrivilegeOptions.CREATE_BOOKINGS],
  },
  {
    name: 'Read bookings',
    value: PrivilegeOptions[PrivilegeOptions.READ_BOOKINGS],
  },
  {
    name: 'Update bookings',
    value: PrivilegeOptions[PrivilegeOptions.UPDATE_BOOKINGS],
  },
  {
    name: 'Delete bookings',
    value: PrivilegeOptions[PrivilegeOptions.DELETE_BOOKINGS],
  },
  {
    name: 'Create privileges',
    value: PrivilegeOptions[PrivilegeOptions.CREATE_PRIVILEGE],
  },
  {
    name: 'Read privileges',
    value: PrivilegeOptions[PrivilegeOptions.READ_PRIVILEGE],
  },
  {
    name: 'Update privileges',
    value: PrivilegeOptions[PrivilegeOptions.UPDATE_PRIVILEGE],
  },
  {
    name: 'Delete privileges',
    value: PrivilegeOptions[PrivilegeOptions.DELETE_PRIVILEGE],
  },
];
