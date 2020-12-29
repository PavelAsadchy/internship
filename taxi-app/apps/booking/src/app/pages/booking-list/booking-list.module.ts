import { NgModule } from '@angular/core';
import { SharedModule } from 'apps/booking/src/app/shared/shared.module';
import { BookingListComponent } from './container/booking-list.component';
import { UrgentBackgroundColorDirective } from 'apps/booking/src/app/shared/directives/urgent-background-color.directive';
import { BookingCreateModule } from '../booking-create/booking-create.module';
import { BookingModule } from 'apps/booking/src/app/shared/modules/booking/booking.module';
import { PopupModule } from 'apps/booking/src/app/shared/modules/popup/popup.module';
import { BookingTableLegendComponent } from './components/booking-table-legend/booking-table-legend.component';
import { BookingTableBtnsComponent } from './components/booking-table-btns/booking-table-btns.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { BookingFilterComponent } from './components/booking-filter/booking-filter.component';

@NgModule({
  declarations: [
    BookingListComponent,
    UrgentBackgroundColorDirective,
    BookingTableLegendComponent,
    BookingTableBtnsComponent,
    BookingTableComponent,
    BookingFilterComponent,
  ],
  imports: [SharedModule, BookingCreateModule, BookingModule, PopupModule],
  exports: [BookingListComponent],
})
export class BookingListModule {}
