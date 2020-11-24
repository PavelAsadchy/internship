import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleOptions } from 'src/app/shared/consts/consts';
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

  vehicleOPtions = VehicleOptions;

  originalOrder(): number {
    return 0;
  }
}
