import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDropOff } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropOffComponent {

  @Input()
  parentGroup: FormGroup;

  @Input()
  dropOff: IDropOff;

}
