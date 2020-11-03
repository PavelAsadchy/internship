import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardDriverComponent } from './components/board-driver/board-driver.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardAdminComponent,
    BoardDriverComponent,
    BoardUserComponent,
    MenuSideComponent,
    MenuMainComponent
  ],
  imports: [
    SharedModule,
    BoardRoutingModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
