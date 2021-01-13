import { NgModule } from '@angular/core';
import { AdminDetailComponent } from './container/admin-detail.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminDetailTableComponent } from './components/admin-detail-table/admin-detail-table.component';
import { PrivilegeFilterPipe } from '../../shared/pipes/privilege-filter.pipe';
import { ProgressModule } from 'src/libs/@modules/progress/progress.module';

@NgModule({
  declarations: [
    AdminDetailComponent,
    AdminDetailTableComponent,
    PrivilegeFilterPipe,
  ],
  imports: [SharedModule, ProgressModule],
  providers: [],
  exports: [AdminDetailComponent],
})
export class AdminDetailModule {}
