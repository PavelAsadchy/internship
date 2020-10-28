import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }