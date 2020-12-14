import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './pages/board/board.module';
import { ProfileModule } from './pages/profile/profile.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AgmCoreModule } from '@agm/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GlobalStoreModule } from './shared/stores/global-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
      apiKey: 'AIzaSyAFYEI6Mv2SthzLCRsN_jTogm5aWJ8Ajt8',
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
