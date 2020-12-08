import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingChannelOptions, BOOKING_CHANNEL_OPTIONS } from 'src/app/shared/consts/booking-options.consts';
import { IChannel } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-booking-channel',
  templateUrl: './booking-channel.component.html',
  styleUrls: ['./booking-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingChannelComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  bookingChannel: IChannel;

  bookingChannelOptions = BOOKING_CHANNEL_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
