import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IVehicle, IVehicleList } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleComponent {

  @Input()
  vehicle: IVehicleList;

  @Output()
  selectedVehicle: EventEmitter<IVehicle> = new EventEmitter<IVehicle>();

  onVehicleSelect(event): void {
    this.selectedVehicle.emit(event);
  }
}
