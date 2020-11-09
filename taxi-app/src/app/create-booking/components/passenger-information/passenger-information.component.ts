import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IClientInformation } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerInformationComponent {

  @Input()
  passengerInformation: IClientInformation;

}
