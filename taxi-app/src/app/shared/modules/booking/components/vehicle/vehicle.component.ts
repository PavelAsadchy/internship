import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VEHICLE_OPTIONS } from 'src/app/shared/consts/booking-options.consts';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent {
  @Input()
  parentGroup: FormGroup;

  vehicleOptions = VEHICLE_OPTIONS;

  originalOrder(): number {
    return 0;
  }
}
