import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IVehicle } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss']
})
export class VehicleItemComponent {

  @Input()
  vehicleItem: IVehicle;

  @Output()
  clickedVehicle: EventEmitter<IVehicle> = new EventEmitter<IVehicle>();

  @HostListener('click')
  onVehicleClick(): void {
    this.clickedVehicle.emit(this.vehicleItem);
  }
}
