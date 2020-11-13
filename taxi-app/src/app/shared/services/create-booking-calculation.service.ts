import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateBookingCalculationService {

  price: number = 0;

  createRandomCalculation(bookingOptions): void {
    if (!bookingOptions.vehicle.items) return;

    switch (bookingOptions.vehicle.items.name) {
      case ('Cab'): this.price = this.randomPrice(1, 10)
      break;

      case ('Branded standart Cab'): this.price = this.randomPrice(10, 20)
      break;

      case ('Van'): this.price = this.randomPrice(20, 30)
      break;

      case ('Executive Cab'): this.price = this.randomPrice(30, 40)
      break;

      case ('Executive Van'): this.price = this.randomPrice(40, 50)
      break;

      case ('Luxury Executive'): this.price = this.randomPrice(50, 60)
      break;

      case ('Mini Bus'): this.price = this.randomPrice(60, 70)
      break;

      case ('Restricted Mobility'): this.price = this.randomPrice(70, 80)
      break;

      case ('Vintage'): this.price = this.randomPrice(80, 90)
      break;

      case ('Luxury Exec. Van'): this.price = this.randomPrice(90, 100)
      break;

      default: 0;
    }
  }

  randomPrice(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  formSubmit(form): void {}
}
