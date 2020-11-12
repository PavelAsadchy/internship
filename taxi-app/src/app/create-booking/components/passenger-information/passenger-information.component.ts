import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClientInformation } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerInformationComponent {

  @Input()
  parentForm: FormGroup;

  @Input()
  passengerInformation: IClientInformation;

  telOptions = {
    initialCountry: 'by',
    prefix: '',
    preferredCountries: ['by', 'ru']
  }

  getNumber(event) {
    console.log(event);
  }

  telInputObject(event) {
    console.log(event);
    this.telOptions.prefix = event.s.dialCode;
  }

  onCountryChange(event) {
    console.log(event);
    this.telOptions.prefix = event.dialCode;
  }

}
