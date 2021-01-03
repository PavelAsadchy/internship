import { NgModule } from '@angular/core';
// import { MenuMainComponent } from 'src/apps/booking/src/app/pages/board/components/menu-main/menu-main.component';
// import { MenuSideComponent } from 'src/apps/booking/src/app/pages/board/components/menu-side/menu-side.component';
import { SharedModule } from 'src/apps/booking/src/app/shared/shared.module';
import { BoardAdminRoutingModule } from './board-admin-routing.module';
import { BoardAdminComponent } from './container/board-admin.component';

@NgModule({
  declarations: [BoardAdminComponent,
    //  MenuSideComponent,
    //   MenuMainComponent
    ],
  imports: [
    SharedModule,
    BoardAdminRoutingModule,
  ],
  exports: [BoardAdminComponent],
})
export class BoardAdminModule {}
