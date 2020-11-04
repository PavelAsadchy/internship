import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateBookingComponent } from './create-booking.component';
import { MapComponent } from './components/map/map.component';
import { BookingBoardComponent } from './components/booking-board/booking-board.component';
import { AgmCoreModule } from '@agm/core';
import { BookingChannelComponent } from './components/booking-channel/booking-channel.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { CustomerInformationComponent } from './components/customer-information/customer-information.component';
import { DropOffComponent } from './components/drop-off/drop-off.component';
import { NotesComponent } from './components/notes/notes.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PassengerInformationComponent } from './components/passenger-information/passenger-information.component';



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
    PaymentOptionsComponent,
    NotesComponent,
    PassengerInformationComponent,
  ],
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8'
    }),
  ],
  exports: [
    CreateBookingComponent
  ]
})
export class CreateBookingModule { }
