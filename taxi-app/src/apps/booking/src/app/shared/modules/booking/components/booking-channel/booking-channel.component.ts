import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BOOKING_CHANNEL_OPTIONS } from 'src/apps/booking/src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-booking-channel',
  templateUrl: './booking-channel.component.html',
  styleUrls: ['./booking-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingChannelComponent {
  @Input()
  parentGroup: FormGroup;

  bookingChannelOptions = BOOKING_CHANNEL_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
