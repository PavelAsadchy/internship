import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateBookingCalculationService {

  price: number = 0;

  createRandomCalculation(field): void {
    switch (field) {
      case ('Now'): this.price = this.randomPrice(30, 50)
      break;

      case ('Later'): this.price = this.randomPrice(1, 10)
      break;

      default: 0;
    }
  }

  randomPrice(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
