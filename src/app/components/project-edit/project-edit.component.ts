// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  // Project details retrieved from the API call
  project: any;

  // Error message retrieved from the API call
  error = null;

  constructor(
    // Dependency injections
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
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

  // Function called when the user clicks the submit button
  projectSubmit(form) {

    // Retrieve the new contributors (populated)
    let newContributors = this.project.contributors;
    
    // Reset the contributors
    this.project.contributors = [];

    newContributors.forEach(contributor => {
      this.project.contributors.push(contributor._id)      
    });

    // Update the project
    this.projectService.editProject(this.project)
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
