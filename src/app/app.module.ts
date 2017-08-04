import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderSubComponent } from './components/header-sub/header-sub.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { SessionService } from './services/session.service';
import { RegisterService } from './services/register.service';

// Routes
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderSubComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    SessionService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
