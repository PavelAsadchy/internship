import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { ProfileComponent } from './container/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ProfileComponent, CardComponent],
  imports: [SharedModule, ProfileRoutingModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
