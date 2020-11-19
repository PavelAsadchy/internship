import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  ICheckboxSection,
  IPayment,
} from 'src/app/shared/models/booking-options.model';

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

  onBasicOptionsChange(
    event: MatCheckboxChange,
    option: ICheckboxSection
  ): void {
    const checkArray: FormArray = this.parentGroup.get(
      'checkBasicOptions'
    ) as FormArray;
    this.setNewValue(checkArray, event, option);
  }

  onExtraOptionsChange(
    event: MatCheckboxChange,
    option: ICheckboxSection
  ): void {
    const checkArray: FormArray = this.parentGroup.get(
      'checkExtraOptions'
    ) as FormArray;
    this.setNewValue(checkArray, event, option);
  }

  setNewValue(
    checkArray: FormArray,
    event: MatCheckboxChange,
    option: ICheckboxSection
  ): void {
    if (event.checked) {
      checkArray.push(new FormControl(option.name));
    } else {
      const index = checkArray.controls.findIndex(
        (control) => control.value === option.name
      );
      checkArray.removeAt(index);
    }
  }
}
