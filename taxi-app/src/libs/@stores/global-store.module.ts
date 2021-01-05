import { NgModule } from '@angular/core';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { MessageStoreModule } from './message-store/message-store.module';

@NgModule({
  imports: [AuthStoreModule, MessageStoreModule],
})
export class GlobalStoreModule {}
