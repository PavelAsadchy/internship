import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from 'src/libs/@modules/not-found/not-found.component';
import { AuthModule } from 'src/libs/@modules/auth/auth.module';
import { BoardModule } from 'src/apps/booking/src/app/pages/board/board.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/apps/booking/src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { GlobalStoreModule } from 'src/apps/booking/src/app/shared/stores/global-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    BoardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    GlobalStoreModule,
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
