import { NgModule } from '@angular/core';
import { AdminEditComponent } from './container/admin-edit.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AdminEditFormComponent } from './components/admin-edit-form/admin-edit-form.component';
import { EditPrivilegesComponent } from './components/edit-privileges/edit-privileges.component';
import { EditNameComponent } from './components/edit-name/edit-name.component';
import { PrivilegesSearchComponent } from './components/privileges-search/privileges-search.component';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { SearchPrivilegeService } from '../../shared/services/search-privilege.service';
import { PopupModule } from 'src/libs/@modules/popup/popup.module';
import { ProgressModule } from 'src/libs/@modules/progress/progress.module';

@NgModule({
  declarations: [
    AdminEditComponent,
    AdminEditFormComponent,
    EditPrivilegesComponent,
    EditNameComponent,
    PrivilegesSearchComponent,
    SearchPipe,
  ],
  imports: [SharedModule, PopupModule, ProgressModule],
  providers: [SearchPrivilegeService],
  exports: [AdminEditComponent],
})
export class AdminEditModule {}
