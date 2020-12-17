import { Component } from '@angular/core';
import { PICK_UP_URGENCY_COLORS } from 'src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-booking-table-legend',
  templateUrl: './booking-table-legend.component.html',
  styleUrls: ['./booking-table-legend.component.scss'],
})
export class BookingTableLegendComponent {
  pickUpUrgency = PICK_UP_URGENCY_COLORS;
}
