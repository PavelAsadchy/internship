import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent {

  constructor(public createBookingCalculationService: CreateBookingCalculationService) {}

  public isSliderChecked: boolean = false;

}
