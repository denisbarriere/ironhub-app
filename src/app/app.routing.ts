// Angular packages
import { Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SessionService] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
