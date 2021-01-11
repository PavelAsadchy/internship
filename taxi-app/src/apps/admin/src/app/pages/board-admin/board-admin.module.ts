import { NgModule } from '@angular/core';
import { MenuMainComponent } from 'src/libs/@modules/menu-main/menu-main.component';
import { MenuSideComponent } from 'src/libs/@modules/menu-side/menu-side.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { BoardAdminRoutingModule } from './board-admin-routing.module';
import { BoardAdminComponent } from './container/board-admin.component';
import { BoardAdminContentComponent } from './components/board-admin-content/board-admin-content.component';
import { AdminGroupsModule } from '../admin-groups/admin-groups.module';
import { AdminEditModule } from '../admin-edit/admin-edit.module';
import { MenuAppsModule } from 'src/libs/@modules/menu-apps/menu-apps.module';

@NgModule({
  declarations: [
    BoardAdminComponent,
    MenuSideComponent,
    MenuMainComponent,
    BoardAdminContentComponent,
  ],
  imports: [
    SharedModule,
    BoardAdminRoutingModule,
    AdminGroupsModule,
    AdminEditModule,
    MenuAppsModule,
  ],
  exports: [BoardAdminComponent],
})
export class BoardAdminModule {}
