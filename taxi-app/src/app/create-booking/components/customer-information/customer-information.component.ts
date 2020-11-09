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

  telOptions = {
    initialCountry: 'by',
    prefix: '',

  }

  prefix: string;

  hasError(event) {
    console.log(event);
  }

  getNumber(event) {
    console.log(event);
  }

  telInputObject(event) {
    console.log(event);
    this.telOptions.prefix = event.s.dialCode
  }

  onCountryChange(event) {
    console.log(event);
    this.telOptions.prefix = event.dialCode;

  }
}
