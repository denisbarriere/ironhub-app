// Angular
import { Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IronhackerListComponent } from './components/ironhacker-list/ironhacker-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

// Services
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SessionService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ironhackers', component: IronhackerListComponent, canActivate: [SessionService] },
  { path: 'projects', component: ProjectListComponent, canActivate: [SessionService] },
  { path: '**', redirectTo: '' }
];
