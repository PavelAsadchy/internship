import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [ProgressBarComponent, ProgressSpinnerComponent],
  imports: [SharedModule],
  exports: [ProgressBarComponent, ProgressSpinnerComponent],
})
export class ProgressModule {}
