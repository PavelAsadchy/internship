import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IChannel } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-booking-channel',
  templateUrl: './booking-channel.component.html',
  styleUrls: ['./booking-channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingChannelComponent {

  @Input()
  bookingChannel: IChannel;

}
