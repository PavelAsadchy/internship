interface IHeadings {
    label?: string;
    caption?: string;
    note?: string;
}

interface IRadioSection extends IHeadings {
    selected: string;
    options: string[];
}

interface IChannel {
    channel: IRadioSection;
}

interface IPickUp {
    time: IRadioSection;
    address: IRadioSection;
}

interface IDropOff {
    address: IRadioSection;
}

interface IVehicle {}

interface IClientInformation extends IHeadings {
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

interface IPaymentOptions {
    channel: IRadioSection;
    type: IRadioSection;
    basicOptions: ICheckboxOptions;
    extraOptions: ICheckboxOptions;
}

export interface IBookingOptions {
    bookingChannel: IChannel;
    pickUp: IPickUp;
    dropOff: IDropOff;
    vehicle: IVehicle;
    customerInformation: IClientInformation;
    passengerInformation: IClientInformation;
    paymentOptions: IPaymentOptions;
}
