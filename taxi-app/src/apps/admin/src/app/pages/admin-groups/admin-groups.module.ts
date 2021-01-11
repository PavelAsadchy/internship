import { NgModule } from '@angular/core';
import { AdminGroupsComponent } from './container/admin-groups.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminGroupsTableComponent } from './components/admin-groups-table/admin-groups-table.component';
import { AdminGroupsTableBtnsComponent } from './components/admin-groups-table-btns/admin-groups-table-btns.component';
import { AdminGroupsDetailComponent } from './components/admin-groups-detail/admin-groups-detail.component';
import { PrivilegeFilterPipe } from '../../shared/pipes/privilege-filter.pipe';

@NgModule({
  declarations: [AdminGroupsComponent, AdminGroupsTableComponent, AdminGroupsTableBtnsComponent, AdminGroupsDetailComponent, PrivilegeFilterPipe],
  imports: [SharedModule],
  exports: [AdminGroupsComponent],
})
export class AdminGroupsModule {}
