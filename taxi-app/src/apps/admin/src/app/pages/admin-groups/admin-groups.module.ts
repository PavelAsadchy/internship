import { NgModule } from '@angular/core';
import { AdminGroupsComponent } from './container/admin-groups.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminGroupsTableComponent } from './components/admin-groups-table/admin-groups-table.component';
import { AdminGroupsTableBtnsComponent } from './components/admin-groups-table-btns/admin-groups-table-btns.component';
import { ProgressModule } from 'src/libs/@modules/progress/progress.module';

@NgModule({
  declarations: [
    AdminGroupsComponent,
    AdminGroupsTableComponent,
    AdminGroupsTableBtnsComponent,
  ],
  imports: [SharedModule, ProgressModule],
  exports: [AdminGroupsComponent],
})
export class AdminGroupsModule {}
