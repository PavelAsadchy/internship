import { IDataForPopup } from '../models/data-for-popup.model';

export const DELETE_BOOKING_CONFIRM: IDataForPopup = {
  header: `Are you sure?`,
  content:
    `
      <p>Do you really want to delete booking?<br>
      This process can't be undone.<p>
    `,
  action: true,
};

export const OPEN_BOOKING_DETAILS: IDataForPopup = {
  header: `Details`,
  content: null,
  action: false,
}