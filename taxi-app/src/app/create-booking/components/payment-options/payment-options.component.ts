import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPaymentOptions } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentOptionsComponent {

  @Input()
  paymentOptions: IPaymentOptions;

}
