import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDropOff } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropOffComponent {

  @Input()
  dropOff: IDropOff;
  
}
