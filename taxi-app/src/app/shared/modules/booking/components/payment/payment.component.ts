import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  PaymentBasicOptions,
  PaymentChannels,
  PaymentExtraOptions,
  PaymentTypes,
  PAYMENT_OPTIONS,
} from 'src/app/shared/consts/booking-options.consts';
import { IPayment } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  payment: IPayment;

  paymentOptions = PAYMENT_OPTIONS;

  onBasicOptionsChange(
    event: MatCheckboxChange,
    option: KeyValue<string, string>
  ): void {
    const checkArray: FormArray = this.parentGroup.get(
      'checkBasicOptions'
    ) as FormArray;
    this.setNewValue(checkArray, event, option);
  }

  onExtraOptionsChange(
    event: MatCheckboxChange,
    option: KeyValue<string, string>
  ): void {
    const checkArray: FormArray = this.parentGroup.get(
      'checkExtraOptions'
    ) as FormArray;
    this.setNewValue(checkArray, event, option);
  }

  setNewValue(
    checkArray: FormArray,
    event: MatCheckboxChange,
    option: KeyValue<string, string>
  ): void {
    if (event.checked) {
      checkArray.push(new FormControl(option.key));
    } else {
      const index = checkArray.controls.findIndex(
        (control) => control.value === option.key
      );
      checkArray.removeAt(index);
    }
  }

  originalOrder(): number {
    return 0;
  }
}
