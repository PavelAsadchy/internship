import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropOffPointOptions } from 'src/app/shared/consts/booking-options.consts';
import { IDropOff } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropOffComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  dropOff: IDropOff;

  dropOffPointOptions = DropOffPointOptions;

  originalOrder(): number {
    return 0;
  }
}
