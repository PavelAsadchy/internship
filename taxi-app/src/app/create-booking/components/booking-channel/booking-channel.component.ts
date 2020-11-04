import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-channel',
  templateUrl: './booking-channel.component.html',
  styleUrls: ['./booking-channel.component.scss']
})
export class BookingChannelComponent {

  public selectedBookingChannel: string;

  public bookingChannels: string[] = [
    'Call',
    'Email',
    'Walking Rocco',
    'Concierge',
    'Goods Delivery',
    'Mobile App',
    'Bot',
  ]
}
