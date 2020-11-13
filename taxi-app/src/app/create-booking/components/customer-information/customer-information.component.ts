import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClientInformation } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerInformationComponent {

  @Input()
  parentGroup: FormGroup;

  @Input()
  customerInformation: IClientInformation;

  telOptions = {
    initialCountry: 'by',
    prefix: '',
    preferredCountries: ['by', 'ru']
  }

  getNumber(event) {
    console.log(event);
  }

  telInputObject(event) {
    this.telOptions.prefix = event.s.dialCode;
  }

  onCountryChange(event) {
    this.telOptions.prefix = event.dialCode;
  }
}
