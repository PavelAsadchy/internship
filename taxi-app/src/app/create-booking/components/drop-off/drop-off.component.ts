import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss']
})
export class DropOffComponent {

  constructor(public createBookingCalculationService: CreateBookingCalculationService) {}

}
