import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  onChanged: EventEmitter<IPaymentOptions> = new EventEmitter<IPaymentOptions>();

  onChange(): void {
    this.onChanged.emit(this.paymentOptions);
  }
}
