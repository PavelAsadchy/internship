import { IDataForPopup } from '../models/data-for-popup.model';

export const DELETE_BOOKING_CONFIRM: IDataForPopup = {
  header: `Are you sure?`,
  content: `
      <p>Do you really want to delete booking?<br>
      This process can't be undone.<p>
    `,
  action: [
    {
      color: 'primary',
      matDialogClose: false,
      content: 'Cancel',
    },
    {
      color: 'warn',
      matDialogClose: true,
      content: 'Delete',
    },
  ],
};

export const OPEN_BOOKING_DETAILS: IDataForPopup = {
  header: `Details`,
  content: null,
  action: null,
};

export const FORM_INVALID_WARNING: IDataForPopup = {
  header: `Warning`,
  content: `<p>Please, provide required fields with valid data.<p>`,
  action: [
    {
      color: 'primary',
      matDialogClose: false,
      content: 'Ok',
    },
  ],
};
