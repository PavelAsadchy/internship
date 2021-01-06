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

export const PRIVILEGE_OPTIONS = {
  [PrivilegeOptions[PrivilegeOptions.CREATE_BOOKINGS]]: {
    name: 'Create bookings',
  },
  [PrivilegeOptions[PrivilegeOptions.READ_BOOKINGS]]: {
    name: 'Read bookings',
  },
  [PrivilegeOptions[PrivilegeOptions.UPDATE_BOOKINGS]]: {
    name: 'Update bookings',
  },
  [PrivilegeOptions[PrivilegeOptions.DELETE_BOOKINGS]]: {
    name: 'Delete bookings',
  },
  [PrivilegeOptions[PrivilegeOptions.CREATE_PRIVILEGE]]: {
    name: 'Create privileges',
  },
  [PrivilegeOptions[PrivilegeOptions.READ_PRIVILEGE]]: {
    name: 'Read privileges',
  },
  [PrivilegeOptions[PrivilegeOptions.UPDATE_PRIVILEGE]]: {
    name: 'Update privileges',
  },
  [PrivilegeOptions[PrivilegeOptions.DELETE_PRIVILEGE]]: {
    name: 'Delete privileges',
  },
};
