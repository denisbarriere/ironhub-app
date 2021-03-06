import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { SessionService } from './services/session.service';
import { RegisterService } from './services/register.service';
import { IronhackerService } from './services/ironhacker.service';
import { ProjectService } from './services/project.service';

// Routes
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderSubComponent } from './components/header-sub/header-sub.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { IronhackerListComponent } from './components/ironhacker-list/ironhacker-list.component';
import { IronhackerListItemComponent } from './components/ironhacker-list-item/ironhacker-list-item.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectNewComponent } from './components/project-new/project-new.component';
import { ProjectContributorsComponent } from './components/project-contributors/project-contributors.component';
import { TagsComponent } from './components/tags/tags.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

// Pipes
import { ProjectFilterPipe } from './pipes/project-filter.pipe';
import { BootcampFilterPipe } from './pipes/bootcamp-filter.pipe';
import { CampusFilterPipe } from './pipes/campus-filter.pipe';
import { IronhackerDetailsComponent } from './components/ironhacker-details/ironhacker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderSubComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    IronhackerListComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectDetailsComponent,
    ProjectNewComponent,
    ProjectContributorsComponent,
    TagsComponent,
    ProjectEditComponent,
    IronhackerListItemComponent,
    ProjectFilterPipe,
    BootcampFilterPipe,
    CampusFilterPipe,
    IronhackerDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [
    SessionService,
    RegisterService,
    IronhackerService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
