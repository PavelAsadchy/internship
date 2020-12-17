import { NgModule } from '@angular/core';
import { BookingModule } from 'src/app/shared/modules/booking/booking.module';
import { MapModule } from 'src/app/shared/modules/map/map.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingEditComponent } from './container/booking-edit.component';

@NgModule({
  declarations: [BookingEditComponent],
  imports: [SharedModule, MapModule, BookingModule],
  exports: [BookingEditComponent],
})
export class BookingEditModule {}
