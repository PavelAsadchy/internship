import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import {
  BookingStatusOptions,
  PickUpUrgency,
  VehicleOptions,
} from '../consts/consts';

@Injectable({
  providedIn: 'root',
})
export class CreateBookingCalculationService {
  price$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  createRandomCalculation(bookingOptions): void {
    if (!bookingOptions.vehicle.items) {
      return;
    }

    switch (bookingOptions.vehicle.items) {
      case VehicleOptions.CAB:
        this.price$.next(this.randomPrice(1, 10));
        break;

      case VehicleOptions.BRANDED_STANDART_CAB:
        this.price$.next(this.randomPrice(10, 20));
        break;

      case VehicleOptions.VAN:
        this.price$.next(this.randomPrice(20, 30));
        break;

      case VehicleOptions.EXECUTIVE_CAB:
        this.price$.next(this.randomPrice(30, 40));
        break;

      case VehicleOptions.EXECUTIVE_VAN:
        this.price$.next(this.randomPrice(40, 50));
        break;

      case VehicleOptions.LUXURY_EXECUTIVE:
        this.price$.next(this.randomPrice(50, 60));
        break;

      case VehicleOptions.MINI_BUS:
        this.price$.next(this.randomPrice(60, 70));
        break;

      case VehicleOptions.RESTRICTED_MOBILITY:
        this.price$.next(this.randomPrice(70, 80));
        break;

      case VehicleOptions.VINTAGE:
        this.price$.next(this.randomPrice(80, 90));
        break;

      case VehicleOptions.LUXURY_EXEC_VAN:
        this.price$.next(this.randomPrice(90, 100));
        break;
    }
  }

  randomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  setPickUpTime(urgencyFlag: string): moment.Moment {
    return this.createPermissibleTimeLag(urgencyFlag);
  }

  createPermissibleTimeLag(property: string): moment.Moment {
    const now = moment();

    if (property === 'NOW') {
      return now.add(10, 'minutes');
    } else {
      return now.add(30, 'minutes');
    }
  }

  setRandomPickUpUrgency() {
    const keys = Object.keys(PickUpUrgency);
    return keys[Math.round(keys.length * Math.random())];
  }

  setRandomStatus(): string {
    return Object.keys(BookingStatusOptions)[
      Math.round(Math.random() * (Object.keys(BookingStatusOptions).length - 1))
    ];
  }
}
