import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClientInformation } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassengerInformationComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  passengerInformation: IClientInformation;

  telOptions = {
    initialCountry: 'by',
    prefix: '',
    preferredCountries: ['by', 'ru'],
  };

  telInputObject(event): void {
    this.telOptions.prefix = event.s.dialCode;
  }

  onCountryChange(event): void {
    this.telOptions.prefix = event.dialCode;
  }
}
