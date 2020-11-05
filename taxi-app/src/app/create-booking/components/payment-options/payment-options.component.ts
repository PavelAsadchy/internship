import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';
// import { IPaymentOption, IPaymentOptions } from 'src/app/shared/models/paymentOptions.model';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent {

  constructor(public createBookingCalculationService: CreateBookingCalculationService) {}

  // public paymentOptions: IPaymentOptions = new IPaymentOptions(
  //   null,
  //   null,
  //   [
  //     'In Vehicle',
  //     'Over The Counter',
  //     'Invoice',  
  //   ],
  //   [
  //     'Cash',
  //   ],
  //   [
  //     new IPaymentOption ('Willing to share', false),
  //   ],
  //   [
  //     new IPaymentOption('Baby Seat', false, '+€5'),
  //     new IPaymentOption('Immediate Retum', false, 'Extra Fee'),
  //     new IPaymentOption('No Luggage', false),
  //     new IPaymentOption('Extra Luggage', false),
  //     new IPaymentOption('Station Wagon', false),
  //     new IPaymentOption('Pet Onboard', false),
  //     new IPaymentOption('Receipt', false),
  //     new IPaymentOption('Restricted Mobility', false),
  //     new IPaymentOption('Step Stool', false),
  //     new IPaymentOption('Arrival Pack', false),
  //     new IPaymentOption('Keys From Office', false),
  //     new IPaymentOption('Male Driver', false),
  //     new IPaymentOption('Female Driver', false),
  //   ]

  // )

  // public selectedPaymentChannel: string;
  // public selectedPaymentType: string;

  // public paymentChannels: string[] = [
  //   'In Vehicle',
  //   'Over The Counter',
  //   'Invoice',
  // ]

  // public paymentTypes: string[] = [
  //   'Cash',
  // ]

  // public paymentOptions: 

}
