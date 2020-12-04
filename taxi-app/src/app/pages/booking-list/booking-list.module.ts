import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { BookingListComponent } from './container/booking-list.component';
import { BookingEnumComponent } from './components/booking-enum/booking-enum.component';
import { DeleteBookingConfirmComponent } from './components/delete-booking-confirm/delete-booking-confirm.component';
import { UrgentBackgroundColorDirective } from 'src/app/shared/directives/urgent-background-color.directive';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { CreateBookingModule } from '../create-booking/create-booking.module';

@NgModule({
  declarations: [
    BookingListComponent,
    FilterComponent,
    BookingListComponent,
    BookingEnumComponent,
    DeleteBookingConfirmComponent,
    UrgentBackgroundColorDirective,
    BookingEditComponent,
  ],
  imports: [SharedModule, CreateBookingModule],
  exports: [BookingListComponent],
})
export class BookingListModule {}
