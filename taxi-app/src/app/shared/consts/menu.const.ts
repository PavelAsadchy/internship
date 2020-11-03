import { IMenuItem } from '../models/menu-item.model';

export const Menu: IMenuItem[] = [
    new IMenuItem('Create Booking', 'Add a new booking entry', 'book', 'create-booking'),
    new IMenuItem('Booking List', 'View a list of bookings', 'library_books', 'booking-list'),
    new IMenuItem('item3', 'description', 'account_box', 'board'),
    new IMenuItem('item4', 'description', 'account_box', 'board'),
]