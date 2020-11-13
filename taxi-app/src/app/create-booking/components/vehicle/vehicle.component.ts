import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IVehicleList } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleComponent {
    
  @Input()
  parentGroup: FormGroup;

  @Input()
  vehicle: IVehicleList;

}
