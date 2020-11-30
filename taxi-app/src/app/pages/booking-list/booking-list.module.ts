import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { BookingListComponent } from './container/booking-list.component';
import { BookingEnumComponent } from './components/booking-enum/booking-enum.component';
import { DeleteBookingConfirmComponent } from './components/delete-booking-confirm/delete-booking-confirm.component';

@NgModule({
  declarations: [BookingListComponent, FilterComponent, BookingListComponent, BookingEnumComponent, DeleteBookingConfirmComponent],
  imports: [SharedModule],
  exports: [BookingListComponent],
})
export class BookingListModule {}
