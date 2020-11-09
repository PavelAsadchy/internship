import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVehicleList } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleComponent {

  @Input()
  vehicle: IVehicleList;

}
