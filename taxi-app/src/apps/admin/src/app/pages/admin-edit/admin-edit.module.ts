import { NgModule } from '@angular/core';
import { AdminEditComponent } from './container/admin-edit.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminEditFormComponent } from './components/admin-edit-form/admin-edit-form.component';
import { EditPrivilegesComponent } from './components/edit-privileges/edit-privileges.component';
import { EditNameComponent } from './components/edit-name/edit-name.component';

@NgModule({
  declarations: [AdminEditComponent, AdminEditFormComponent, EditPrivilegesComponent, EditNameComponent],
  imports: [SharedModule],
  exports: [AdminEditComponent],
})
export class AdminEditModule {}
