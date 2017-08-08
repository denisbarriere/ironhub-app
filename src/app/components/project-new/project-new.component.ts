// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ProjectService } from '../../services/project.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {

  // Information from the form
  project: Object = {
		name: '',
    tagline: '',
    shortDescription: '',
    description: '',
    endOfModuleProject: '',
    hashtags: [],
    urls: {
      gitHub: '',
      productUrl: '',
      projectImageUrl: '',
      screenshots: [
        {
          title: '',
          url: ''
        }
      ],
      slidePresentationUrl: '',
      videoPresentationUrl: ''
    },
    contributors: []
  }

  // Error message retrieved from the API call
  error = null;

  constructor(
    // Dependency injection
    private projectService: ProjectService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Function called when the user clicks the submit button
  projectSubmit(form) {
    
    // Set the current users as a contributor of the new project, for now (until the contributor management feature is in place)
    this.project['contributors'].push(this.session.user['_id']);

    // Add the new project
    this.projectService.addProject(this.project)
      .subscribe(
        (data) => {
          if(data.status === 201) {
            form.reset();
            this.router.navigate(['/projects']);
          }
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
