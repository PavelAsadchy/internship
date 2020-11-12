import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IPaymentOptions } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentOptionsComponent {

  @Input()
  parentForm: FormGroup;

  @Input()
  paymentOptions: IPaymentOptions;

  @Output()
  onChanged: EventEmitter<IPaymentOptions> = new EventEmitter<IPaymentOptions>();

  onChange(): void {
    this.onChanged.emit(this.paymentOptions);
  }

  onCheckboxChange(event) {
    console.log(event)
    const checkArray: FormArray = this.parentForm.get('checkExtraOptions') as FormArray;

    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.name));
    } else {
      const index = checkArray.controls.findIndex(control => control.value === event.target.name);
      checkArray.removeAt(index);
    }
  }
}
