import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { BookingListComponent } from './container/booking-list.component';
import { UrgentBackgroundColorDirective } from 'src/apps/booking/src/app/shared/directives/urgent-background-color.directive';
import { BookingCreateModule } from '../booking-create/booking-create.module';
import { BookingModule } from 'src/apps/booking/src/app/shared/modules/booking/booking.module';
import { PopupModule } from 'src/libs/@modules/popup/popup.module';
import { BookingTableLegendComponent } from './components/booking-table-legend/booking-table-legend.component';
import { BookingTableBtnsComponent } from './components/booking-table-btns/booking-table-btns.component';
import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { BookingFilterComponent } from './components/booking-filter/booking-filter.component';
import { ProgressModule } from 'src/libs/@modules/progress/progress.module';

@NgModule({
  declarations: [
    BookingListComponent,
    UrgentBackgroundColorDirective,
    BookingTableLegendComponent,
    BookingTableBtnsComponent,
    BookingTableComponent,
    BookingFilterComponent,
  ],
  imports: [
    SharedModule,
    BookingCreateModule,
    BookingModule,
    PopupModule,
    ProgressModule,
  ],
  exports: [BookingListComponent],
})
export class BookingListModule {}
