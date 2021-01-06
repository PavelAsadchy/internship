export enum PrivilegeOptions {
  CREATE_BOOKINGS = 'Create bookings',
  READ_BOOKINGS = 'Read bookings',
  UPDATE_BOOKINGS = 'Update bookings',
  DELETE_BOOKINGS = 'Delete bookings',
  CREATE_PRIVILEGE = 'Create privileges',
  READ_PRIVILEGE = 'Read privileges',
  UPDATE_PRIVILEGE = 'Update privileges',
  DELETE_PRIVILEGE = 'Delete privileges',
}

export const PRIVILEGE_OPTIONS = [
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
