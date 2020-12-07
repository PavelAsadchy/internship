import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VEHICLE_LIST } from 'src/app/shared/consts/booking-options.consts';
import { IVehicleList } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent {
  @Input()
  parentGroup: FormGroup;

  @Input()
  vehicle: IVehicleList;

  vehicleList = VEHICLE_LIST;

  originalOrder(): number {
    return 0;
  }
}
