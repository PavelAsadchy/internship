import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CHECK_BASIC_OPTIONS,
  CHECK_EXTRA_OPTIONS,
  PAYMENT_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
  @Input()
  parentGroup: FormGroup;

  paymentOptions = PAYMENT_OPTIONS;
  checkBasicOptions = CHECK_BASIC_OPTIONS;
  checkExtraOptions = CHECK_EXTRA_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
