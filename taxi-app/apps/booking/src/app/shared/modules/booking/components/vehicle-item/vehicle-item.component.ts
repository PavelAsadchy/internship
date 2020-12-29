import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IVehicle } from 'apps/booking/src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleItemComponent {
  @Input()
  vehicleItem: IVehicle;
}
