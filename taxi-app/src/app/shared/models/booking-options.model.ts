export interface IVehicle {
  name: string;
  img: string;
  capacity: string;
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
