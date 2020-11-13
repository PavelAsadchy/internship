import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
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

  // @ViewChild('ref', { read: ElementRef })
  // ref: ElementRef

  onChange(): void {
    this.onChanged.emit(this.paymentOptions);
  }

  onBasicOptionsChange(event, option) {
    const checkArray: FormArray = this.parentForm.get('checkBasicOptions') as FormArray;

    this.setNewValue(checkArray, event, option);
    // if (event.checked) {
    //   checkArray.push(new FormControl(option.name));
    // } else {
    //   const index = checkArray.controls.findIndex(control => control.value === option.name);
    //   checkArray.removeAt(index);
    // }
  }

  onExtraOptionsChange(event, option) {
    const checkArray: FormArray = this.parentForm.get('checkExtraOptions') as FormArray;

    this.setNewValue(checkArray, event, option);
    // if (event.checked) {
    //   checkArray.push(new FormControl(option.name));
    // } else {
    //   const index = checkArray.controls.findIndex(control => control.value === option.name);
    //   checkArray.removeAt(index);
    // }
  }

  setNewValue(checkArray, event, option): void {
    if (event.checked) {
      checkArray.push(new FormControl(option.name));
    } else {
      const index = checkArray.controls.findIndex(control => control.value === option.name);
      checkArray.removeAt(index);
    }

  } 
}
