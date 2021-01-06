import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AdminEffects } from './admin.effects';
import * as fromAdmin from './admin.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('admin', fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminStoreModule {}
