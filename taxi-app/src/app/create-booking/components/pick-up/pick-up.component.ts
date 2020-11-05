import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss']
})
export class PickUpComponent {

  constructor(public createBookingCalculationService: CreateBookingCalculationService) {}

}
