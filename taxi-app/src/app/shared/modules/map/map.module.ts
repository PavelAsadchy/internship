import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './container/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, AgmCoreModule],
  exports: [MapComponent],
})
export class MapModule {}
