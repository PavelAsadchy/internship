import { IMenuItem } from '../models/menu-item.model';

export const Menu: IMenuItem[] = [
    new IMenuItem('Create Booking', 'Add a new booking entry', 'book', '/board'),
    new IMenuItem('Booking List', 'View a list of bookings', 'library_books', '/board'),
    new IMenuItem('item3', 'description', 'account_box', '/board'),
    new IMenuItem('item4', 'description', 'account_box', '/board'),
]