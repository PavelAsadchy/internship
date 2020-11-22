import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingChannelOptions } from 'src/app/shared/consts/consts';
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

  bookingChannelOptions = BookingChannelOptions;

  originalOrder(): number {
    return 0;
  }

}
