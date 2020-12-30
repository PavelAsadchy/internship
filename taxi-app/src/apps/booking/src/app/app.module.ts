import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '../../../../libs/@auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './pages/board/board.module';
import { ProfileModule } from './pages/profile/profile.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AgmCoreModule } from '@agm/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GlobalStoreModule } from './shared/stores/global-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/apps/booking/src/environments/environment';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    BoardModule,
    ProfileModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    GlobalStoreModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
