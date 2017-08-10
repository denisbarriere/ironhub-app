// Angular
import { Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IronhackerListComponent } from './components/ironhacker-list/ironhacker-list.component';
import { IronhackerDetailsComponent } from './components/ironhacker-details/ironhacker-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

// Services
import { SessionService } from './services/session.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SessionService] },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'ironhackers', component: IronhackerListComponent, canActivate: [SessionService] },
  { path: 'ironhackers/:id', component: IronhackerDetailsComponent, canActivate: [SessionService] },
  { path: 'projects', component: ProjectListComponent, canActivate: [SessionService] },
  { path: 'projects/new', component: ProjectNewComponent, canActivate: [SessionService] },
  { path: 'projects/:id', component: ProjectDetailsComponent, canActivate: [SessionService] },
  { path: 'projects/:id/edit', component: ProjectEditComponent, canActivate: [SessionService] },
  { path: '**', redirectTo: '' }
];
