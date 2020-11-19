import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MessageEffects } from './message.effects';
import * as fromMessage from './message.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('message', fromMessage.reducer),
    EffectsModule.forFeature([MessageEffects]),
  ],
})
export class MessageStoreModule {}
