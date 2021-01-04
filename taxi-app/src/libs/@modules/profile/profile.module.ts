import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
