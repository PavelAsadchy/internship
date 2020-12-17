import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookingCreateComponent } from './container/booking-create.component';
import { BookingModule } from 'src/app/shared/modules/booking/booking.module';
import { MapModule } from 'src/app/shared/modules/map/map.module';

@NgModule({
  declarations: [BookingCreateComponent],
  imports: [SharedModule, BookingModule, MapModule],
  providers: [],
  exports: [BookingCreateComponent],
})
export class BookingCreateModule {}
