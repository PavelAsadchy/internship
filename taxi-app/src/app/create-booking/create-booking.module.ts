import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateBookingComponent } from './create-booking.component';
import { MapComponent } from './components/map/map.component';
import { BookingBoardComponent } from './components/booking-board/booking-board.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    CreateBookingComponent,
    MapComponent,
    BookingBoardComponent,
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
