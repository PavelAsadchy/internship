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
  img?: string;
  capacity?: string;
}

export interface IChannel {
  channel: IRadioSection;
}

export interface IPickUp extends IHeadings {
  time?: IRadioSection;
  point?: IRadioSection;
  address: string;
}

export interface IDropOff extends IHeadings {
  point?: IRadioSection;
  address: string;
}

export interface IVehicleList extends IHeadings {
  items: IVehicle[];
}

export interface IClientInformation extends IHeadings {
  phone: string;
  email?: string;
  name: string;
}

export interface ICheckboxSection extends IHeadings {
  name: string;
  checked: boolean;
}

interface ICheckboxOptions extends IHeadings {
  options: ICheckboxSection[];
}

export interface IPaymentOptions {
  channel: IRadioSection;
  type: IRadioSection;
}

export interface IPayment {
  paymentOptions: IPaymentOptions;
  checkBasicOptions: ICheckboxOptions;
  checkExtraOptions: ICheckboxOptions;
}

export interface INotes extends IHeadings {}

export interface IBookingOptions {
  bookingChannel?: IChannel;
  pickUp: IPickUp;
  dropOff: IDropOff;
  vehicle: IVehicleList;
  customerInformation: IClientInformation;
  passengerInformation?: IClientInformation;
  payment?: IPayment;
  notes?: INotes;
  id?: string;
}

import { Validators } from '@angular/forms';

export class BookingChannel {
  channel = [null];
}

export class PickUp {
  time = [null];
  point = [null];
  address = ['', Validators.required];
}

export class DropOff {
  point = [null];
  address = ['', Validators.required];
}

export class Vehicle {
  items = [null, Validators.required];
}

export class CustomerInformation {
  phone = ['', [Validators.required, Validators.pattern('[0-9]{12}')]];
  email = ['', Validators.email];
  name = ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]];
}

export class PassengerInformation {
  phone = ['', [Validators.pattern('[0-9]{12}')]];
  name = ['', [Validators.pattern('[A-Za-z]{1,32}')]];
}

export class PaymentOptions {
  channel = [null];
  type = [null];
}

export class Check {
  constructor(public name: string, public value: string) {}
}

export class Notes {
  toDriver = [''];
  toDispatcher = [''];
}
