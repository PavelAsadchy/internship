import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { BookingListComponent } from './container/booking-list.component';
import { BookingEnumComponent } from './components/booking-enum/booking-enum.component';
import { UrgentBackgroundColorDirective } from 'src/app/shared/directives/urgent-background-color.directive';
import { BookingCreateModule } from '../booking-create/booking-create.module';
import { BookingModule } from 'src/app/shared/modules/booking/booking.module';
import { PopupModule } from 'src/app/shared/modules/popup/popup.module';

@NgModule({
  declarations: [
    BookingListComponent,
    FilterComponent,
    BookingListComponent,
    BookingEnumComponent,
    UrgentBackgroundColorDirective,
  ],
  imports: [SharedModule, BookingCreateModule, BookingModule, PopupModule],
  exports: [BookingListComponent],
})
export class BookingListModule {}
