import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PICK_UP_OPTIONS } from 'src/apps/booking/src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickUpComponent {
  @Input()
  parentGroup: FormGroup;

  pickUpOptions = PICK_UP_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
