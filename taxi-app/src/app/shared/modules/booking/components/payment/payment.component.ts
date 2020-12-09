import { KeyValue } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
export class PaymentComponent implements OnInit {
  @Input()
  parentGroup: FormGroup;

  paymentOptions = PAYMENT_OPTIONS;
  checkBasicOptions = CHECK_BASIC_OPTIONS;
  checkExtraOptions = CHECK_EXTRA_OPTIONS;

  updateChkbxArray(
    chkbx: KeyValue<string, string>,
    event: MatCheckboxChange,
    key: string
  ): void {
    const checkArray: FormArray = this.parentGroup.get(key) as FormArray;
    this.setNewValue(checkArray, event, chkbx);
  }

  ngOnInit() {}

  // onBasicOptionsChange(
  //   event: MatCheckboxChange,
  //   option: KeyValue<string, string>
  // ): void {
  //   const checkArray: FormArray = this.parentGroup.get(
  //     'checkBasicOptions'
  //   ) as FormArray;
  //   this.setNewValue(checkArray, event, option);
  // }

  // onExtraOptionsChange(
  //   event: MatCheckboxChange,
  //   option: KeyValue<string, string>
  // ): void {
  //   const checkArray: FormArray = this.parentGroup.get(
  //     'checkExtraOptions'
  //   ) as FormArray;
  //   this.setNewValue(checkArray, event, option);
  // }

  setNewValue(
    checkArray: FormArray,
    event: MatCheckboxChange,
    option: KeyValue<string, string>
  ): void {
    console.log(option);
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

  trigger() {
    console.log(this.parentGroup.get('checkExtraOptions'));
  }
}
