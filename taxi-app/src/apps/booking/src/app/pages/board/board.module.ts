import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './container/board.component';
import { MenuSideComponent } from 'src/libs/@modules/menu-side/menu-side.component';
import { MenuMainComponent } from 'src/libs/@modules/menu-main/menu-main.component';
import { BookingCreateModule } from 'src/apps/booking/src/app/pages/booking-create/booking-create.module';
import { BookingListModule } from '../booking-list/booking-list.module';
import { BookingEditModule } from '../booking-edit/booking-edit.module';
import { BoardContentComponent } from './components/board-content/board-content.component';

@NgModule({
  declarations: [
    BoardComponent,
    MenuSideComponent,
    MenuMainComponent,
    BoardContentComponent,
  ],
  imports: [
    SharedModule,
    BoardRoutingModule,
    BookingCreateModule,
    BookingListModule,
    BookingEditModule,
  ],
  exports: [BoardComponent],
})
export class BoardModule {}
