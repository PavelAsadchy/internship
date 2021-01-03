import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/apps/booking/src/environments/environment';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({
          height: 0,
          opacity: 0,
        }),
        animate(
          '.5s ease-out',
          style({
            height: 170,
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({
          height: 170,
          opacity: 1,
        }),
        animate(
          '.5s ease-in',
          style({
            height: 0,
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class PassengerInformationComponent {
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
