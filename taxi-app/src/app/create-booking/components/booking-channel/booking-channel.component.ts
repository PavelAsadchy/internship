import { Component } from '@angular/core';
import { CreateBookingCalculationService } from 'src/app/shared/services/create-booking-calculation.service';

@Component({
  selector: 'app-booking-channel',
  templateUrl: './booking-channel.component.html',
  styleUrls: ['./booking-channel.component.scss']
})
export class BookingChannelComponent {
  
  constructor(public createBookingCalculationService: CreateBookingCalculationService) {}
  
}
