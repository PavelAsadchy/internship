import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerInformationComponent {
  @Input()
  parentGroup: FormGroup;

  telOptions = {
    initialCountry: '',
    prefix: '',
    preferredCountries: [],
  };

  constructor() {
    this.telOptions = { ...environment.telOptions };
  }

  telInputObject(event): void {
    this.telOptions.prefix = event.s.dialCode;
  }

  onCountryChange(event): void {
    this.telOptions.prefix = event.dialCode;
  }
}
