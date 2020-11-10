export const AUTH_URL = 'http://localhost:8080';

export const JWT_TOKEN = 'JWT_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const LOCATION_API_URL = 'https://ipapi.co/json/';

export enum BookingOptionsType {
    BookingChannel = 'BookingChannel',
    PickUpTime = 'PickUpTime',
    PickUpPoint = 'PickUpPoint',
    PickUpAddress = 'PickUpAddress',
    DropOffPoint = 'DropOffPoint',
    DropOffAddress = 'DropOffAddress',
    Vehicle = 'Vehicle',
    CustomerPhone = 'CustomerPhone',
    CustomerEmail = 'CustomerEmail',
    CustomerName = 'CustomerName',
    PassengerPhone = 'PassengerPhone',
    PassengerName = 'PassengerName',
    PaymentChannel = 'PaymentChannel',
    PaymentType = 'PaymentType',
    PaymentOptions = 'PaymentOptions',
    PaymentExtras = 'PaymentExtras',
    DriverNote = 'DriverNote',
    DispatcherNote = 'DispatcherNote',
}