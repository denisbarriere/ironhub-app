// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  ironhackerId: String; // Id of the ironhacker projects to display, if found in the query parameters
  searchKeywords: string; // Used to retrieve the keywords to filter the list
  projects = [{}]; // Retrive the projects from the API
  numberOfProjects: number = 0; // Total number of projects
  limit: number = 16; // Number of project loaded
  offset: number = 0; // Offset used for the lazy load
  isPageLoading = true; // Used to show the loading animation on page load
  isLazyLoading = false; // Used to show the loading animation on lazy load

  constructor(
    // Dependency injections
    private project: ProjectService,
    private route: ActivatedRoute,
    private session: SessionService
  ) { }

  ngOnInit() {
    
    // // First, check if there is 'ironhacker' in the query params
    this.ironhackerId = this.route.snapshot.queryParams['ironhacker'];

    // If so, get the projects related to this ironhacker only
    if (this.ironhackerId) { 
      
      // Get the list of all projects, for this user
      this.project.getProjectListById(this.ironhackerId)
        .subscribe((projects) => {
          this.projects = projects;

          // Retrieve the number of projects found
          this.numberOfProjects = this.projects.length;
          
          // Hide the loading animation once the page is loaded
          this.isPageLoading = false;
        });

    } else {

      // Get the list of all projects
      this.project.getProjectList(this.limit, this.offset)
        .subscribe((projects) => {
          this.projects = projects;

          // Retrieve the number of projects found
          this.numberOfProjects = this.projects.length;
          
          // Hide the loading animation once the page is loaded
          this.isPageLoading = false;
        });
    }
  }

  // Function called when a user click the delete button from the list-item child component
  deleteProject(projectId) {

    // Remove the project from the list of project with lodash
    _.remove(this.projects, (project) => { 
      return project['_id'] === projectId;
    })
  }
}
