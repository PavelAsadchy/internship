import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PickUpPointOptions,
  PickUpTimeOptions,
  PICK_UP_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IPickUp } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickUpComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  pickUp: IPickUp;

  pickUpOptions = PICK_UP_OPTIONS;

  // pickUpPointOptions = PickUpPointOptions;

  originalOrder(): number {
    return 0;
  }
}
