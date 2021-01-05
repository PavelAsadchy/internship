import { NgModule } from '@angular/core';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { AuthComponent } from './container/auth.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/libs/@shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
  ],
  imports: [SharedModule, AuthRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
