import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateBookingComponent } from './container/create-booking.component';
import { MapComponent } from './components/map/map.component';
import { BookingBoardComponent } from './components/booking-board/booking-board.component';
import { AgmCoreModule } from '@agm/core';
import { BookingChannelComponent } from './components/booking-channel/booking-channel.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { DropOffComponent } from './components/drop-off/drop-off.component';
import { NotesComponent } from './components/notes/notes.component';
import { PaymentComponent } from './components/payment/payment.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PassengerInformationComponent } from './components/passenger-information/passenger-information.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { BookingOptionsService } from '../../shared/services/booking-options.service';



@NgModule({
  declarations: [
    CreateBookingComponent,
    MapComponent,
    BookingBoardComponent,
    BookingChannelComponent,
    PickUpComponent,
    DropOffComponent,
    VehicleComponent,
    CustomerInformationComponent,
    PaymentComponent,
    NotesComponent,
    PassengerInformationComponent,
    VehicleItemComponent,
  ],
  imports: [
    SharedModule,
    AgmCoreModule,
  ],
  providers: [
    BookingOptionsService
  ],
  exports: [
    CreateBookingComponent
  ]
})
export class CreateBookingModule { }
