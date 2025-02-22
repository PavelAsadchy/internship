import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AuthModule } from 'src/libs/@modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './pages/board/board.module';
import { NotFoundComponent } from 'src/libs/@modules/not-found/not-found.component';
import { AgmCoreModule } from '@agm/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingGlobalStoreModule } from './shared/stores/booking-global-store.module';
import { GlobalStoreModule } from 'src/libs/@stores/global-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    BoardModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BookingGlobalStoreModule,
    GlobalStoreModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
