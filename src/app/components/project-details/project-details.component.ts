// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { ProjectService } from '../../services/project.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  // Project details retrieved from the API call
  project: any;

  constructor(
    // Dependency injections
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private session: SessionService
  ) { }

  ngOnInit() {
    // Retrieve the param from the URL and call the local 'getProjectDetails' function
     this.route.params.subscribe(params => {
      this.getProjectDetails(params['id']);
    });
  }

  // Get the project details from the API
  getProjectDetails(id) {
    this.projectService.getProject(id)
      .subscribe((project) => {
        this.project = project;
      });
  }

  // Add new contributors
  addContributors() {
    //TODO:
    // Display something for the user to add a contributor
  }

  // Delete the current project
  deleteProject() {
    if (window.confirm('Are you sure?')) {
      this.projectService.removeProject(this.project._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}