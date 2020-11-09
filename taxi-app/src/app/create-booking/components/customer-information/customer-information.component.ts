import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IClientInformation } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerInformationComponent {

  @Input()
  customerInformation: IClientInformation;

}
