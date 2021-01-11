import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { MenuAppsComponent } from './container/menu-apps.component';

@NgModule({
  declarations: [MenuAppsComponent],
  imports: [SharedModule],
  exports: [MenuAppsComponent],
})
export class MenuAppsModule {}
