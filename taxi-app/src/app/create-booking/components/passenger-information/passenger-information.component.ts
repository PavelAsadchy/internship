import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.scss']
})
export class PassengerInformationComponent {

  constructor(public createBookingCalculationService: CreateBookingCalculationService) { }

}
