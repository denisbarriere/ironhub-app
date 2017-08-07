// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {

  // Information from the form
  project: Object = {
		name: '',
    shortDescription: '',
    description: '',
    endOfModuleProject: '',
    type: '',
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
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Function called when the user clicks the submit button
  addNewProject() {
    this.projectService.addProject(this.project).subscribe(
      (data) => {
        this.router.navigate(['/projects']);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
