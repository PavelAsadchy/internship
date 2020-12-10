import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { PopupComponent } from './container/popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [SharedModule],
  exports: [PopupComponent],
})
export class PopupModule {}
