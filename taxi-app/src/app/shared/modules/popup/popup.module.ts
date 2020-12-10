import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { PopupComponent } from './container/popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [SharedModule, CommonModule],
  exports: [PopupComponent],
})
export class PopupModule {}
