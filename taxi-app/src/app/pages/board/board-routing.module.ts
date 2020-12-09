import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookingComponent } from 'src/app/pages/create-booking/container/create-booking.component';
import { BoardComponent } from './container/board.component';
import { BookingListComponent } from 'src/app/pages/booking-list/container/booking-list.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { BookingEditComponent } from '../booking-edit/container/booking-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {
        path: '',
        component: MenuMainComponent,
      },
      {
        path: 'booking',
        redirectTo: 'booking/create',
        pathMatch: 'full',
      },
      {
        path: 'booking',
        children: [
          {
            path: 'create',
            component: CreateBookingComponent,
          },
          {
            path: 'list',
            component: BookingListComponent,
          },
          {
            path: 'update/:id',
            component: BookingEditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
