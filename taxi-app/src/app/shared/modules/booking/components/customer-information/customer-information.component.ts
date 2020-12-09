import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
