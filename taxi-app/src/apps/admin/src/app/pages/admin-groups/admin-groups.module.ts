import { NgModule } from '@angular/core';
import { AdminGroupsComponent } from './container/admin-groups.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminGroupsTableComponent } from './components/admin-groups-table/admin-groups-table.component';

@NgModule({
  declarations: [AdminGroupsComponent, AdminGroupsTableComponent],
  imports: [SharedModule],
  exports: [AdminGroupsComponent],
})
export class AdminGroupsModule {}
