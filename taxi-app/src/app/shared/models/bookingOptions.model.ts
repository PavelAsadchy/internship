interface IHeadings {
    label?: string;
    caption?: string;
    note?: string;
}

interface IRadioSection extends IHeadings {
    selected: string;
    options: string[];
}

export interface IVehicle {
    name: string;
    img: string;
    capacity: string;
}

export interface IChannel {
    channel: IRadioSection;
}

export interface IPickUp {
    time: IRadioSection;
    point: IRadioSection;
    address: string;
}

export interface IDropOff {
    point: IRadioSection;
    address: string;
}

export interface IVehicleList {
    items: IVehicle[];
}

export interface IClientInformation extends IHeadings {
    phone: string;
    email?: string;
    name: string;
}

interface ICheckboxSection extends IHeadings {
    name: string;
    checked: boolean;
}

interface ICheckboxOptions extends IHeadings {
    options: ICheckboxSection[];
}

export interface IPaymentOptions {
    channel: IRadioSection;
    type: IRadioSection;
    basicOptions: ICheckboxOptions;
    extraOptions: ICheckboxOptions;
}

export interface IBookingOptions {
    bookingChannel: IChannel;
    pickUp: IPickUp;
    dropOff: IDropOff;
    vehicle: IVehicleList;
    customerInformation: IClientInformation;
    passengerInformation: IClientInformation;
    paymentOptions: IPaymentOptions;
}
