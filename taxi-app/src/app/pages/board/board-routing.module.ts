import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {
        path: '',
        component: BoardUserComponent,
      },
      {
        path: 'create-booking',
        component: CreateBookingComponent,
      },
      {
        path: 'booking-list',
        component: BookingListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
