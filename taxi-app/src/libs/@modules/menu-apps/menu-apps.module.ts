import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { MenuAppsComponent } from './container/menu-apps.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';

@NgModule({
  declarations: [MenuAppsComponent, DropDownComponent],
  imports: [SharedModule],
  exports: [MenuAppsComponent],
})
export class MenuAppsModule {}
