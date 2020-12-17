import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DROP_OFF_OPTIONS } from 'src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropOffComponent {
  @Input()
  parentGroup: FormGroup;

  dropOffOptions = DROP_OFF_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
