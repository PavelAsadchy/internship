import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPickUp } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickUpComponent {

  @Input()
  pickUp: IPickUp;

}
