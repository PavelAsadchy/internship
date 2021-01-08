import { NgModule } from '@angular/core';
import { AdminEditComponent } from './container/admin-edit.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminEditFormComponent } from './components/admin-edit-form/admin-edit-form.component';

@NgModule({
  declarations: [AdminEditComponent, AdminEditFormComponent],
  imports: [SharedModule],
  exports: [AdminEditComponent],
})
export class AdminEditModule {}
