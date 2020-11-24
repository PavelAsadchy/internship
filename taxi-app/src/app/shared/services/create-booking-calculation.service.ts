import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateBookingCalculationService {
  price$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  createRandomCalculation(bookingOptions): void {
    if (!bookingOptions.vehicle.items) {
      return;
    }

    switch (bookingOptions.vehicle.items.name) {
      case 'Cab':
        this.price$.next(this.randomPrice(1, 10));
        break;

      case 'Branded standart Cab':
        this.price$.next(this.randomPrice(10, 20));
        break;

      case 'Van':
        this.price$.next(this.randomPrice(20, 30));
        break;

      case 'Executive Cab':
        this.price$.next(this.randomPrice(30, 40));
        break;

      case 'Executive Van':
        this.price$.next(this.randomPrice(40, 50));
        break;

      case 'Luxury Executive':
        this.price$.next(this.randomPrice(50, 60));
        break;

      case 'Mini Bus':
        this.price$.next(this.randomPrice(60, 70));
        break;

      case 'Restricted Mobility':
        this.price$.next(this.randomPrice(70, 80));
        break;

      case 'Vintage':
        this.price$.next(this.randomPrice(80, 90));
        break;

      case 'Luxury Exec. Van':
        this.price$.next(this.randomPrice(90, 100));
        break;
    }
  }

  randomPrice(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  formSubmit(form): void {}
}
