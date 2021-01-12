import { NgModule } from '@angular/core';
import { AdminDetailComponent } from './container/admin-detail.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminDetailTableComponent } from './components/admin-detail-table/admin-detail-table.component';
import { PrivilegeFilterPipe } from '../../shared/pipes/privilege-filter.pipe';

@NgModule({
  declarations: [
    AdminDetailComponent,
    AdminDetailTableComponent,
    PrivilegeFilterPipe
  ],
  imports: [SharedModule],
  providers: [],
  exports: [AdminDetailComponent],
})
export class AdminDetailModule {}
