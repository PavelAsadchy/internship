import { NgModule } from '@angular/core';
import { AdminEditComponent } from './container/admin-edit.component';
import { SharedModule } from 'src/libs/@shared/shared.module';

@NgModule({
  declarations: [AdminEditComponent],
  imports: [SharedModule],
  exports: [AdminEditComponent],
})
export class AdminEditModule {}
