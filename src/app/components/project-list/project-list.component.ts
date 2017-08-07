// Angular
import { Component, OnInit } from '@angular/core';

// Javacript libraries
import * as _ from 'lodash';

// services
import { ProjectService } from '../../services/project.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [{}]; // Retrive the projects from the API
  numberOfProjects: number = 0; // Total number of projects
  limit: number = 2; // Number of project loaded
  offset: number = 0; // Offset used for the lazy load
  isPageLoading = true; // Used to show the loading animation on page load
  isLazyLoading = false; // Used to show the loading animation on lazy load

  constructor(
    // Dependency injections
    private project: ProjectService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.project.getProjectList(this.limit, this.offset)
      .subscribe((projects) => {
        this.projects = projects;

        // Retrieve the number of projects found
        this.numberOfProjects = this.projects.length;
        
        // Hide the loading animation once the page is loaded
        this.isPageLoading = false;
      });
  }

  // Function called when a user click the delete button from the list-item child component
  deleteProject(projectId) {

    // Remove the project from the list of project with lodash
    _.remove(this.projects, (project) => { 
      return project['_id'] === projectId;
    })
  }
}
