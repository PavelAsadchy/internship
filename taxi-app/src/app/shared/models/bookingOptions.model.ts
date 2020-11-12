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

import { Validators } from '@angular/forms';

export class BookingChannel {
    channel = [null, Validators.required];
}

export class PickUp {
    time = [null, Validators.required];
    point = [null, Validators.required];
    address = ['', Validators.required];
}

export class DropOff {
    point = [null, Validators.required];
    address = ['', Validators.required];
}

export class Vehicle {
    items = [null, Validators.required]; 
}

export class CustomerInformation {
    phone = ['', Validators.required]; 
    email = ['', Validators.required]; 
    name = ['', Validators.required]; 
}

export class PassengerInformation {
    phone = ['', Validators.required];
    name = ['', Validators.required];
}

export class PaymentOptions {
    channel = [null, Validators.required];
    type = [null, Validators.required];
}

export class Check {
    constructor(
        public name: string,
        public value: string
    ) {}
}

export class PaymentBasicOptions {

}
    // basicOptions = [null, Validators.required];
    // extraOptions = [null, Validators.required];


export class Notes {
    toDriver = ['', Validators.required];
    toDispatcher = ['', Validators.required];
}
