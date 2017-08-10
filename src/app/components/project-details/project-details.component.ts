// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { ProjectService } from '../../services/project.service';
import { SessionService } from '../../services/session.service';

// Javacript libraries
import * as _ from 'lodash';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  // Local component variables
  project: any; // Project details retrieved from the API call
  isEditable: boolean; // Used to know if the actions (edit, delete) should be displayed
  fullList: boolean = true; // Used by the project-contributors component
  absolutePosition: boolean = false; // Used for positioning the tag component
  gradiantList: Array<String> = ['grad-from-pink-to-orange','grad-from-purple-to-pink', 'grad-from-red-to-pink'];
  heroBgColorClass: String = this.getRandomGradiant(); // Get a random gradiant when no project images are found
  bootcampProgress: number; // Bootcamp progress in percent, based on which 


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

        // Check if the logged-in user is an admin or a contributor of the project
        let isContributor = _.findKey(this.project.contributors, (contributor) => {
          return contributor['_id'] === this.session.user['_id']
        });
    
        // If so, the logged-in user can edit
        if(this.session.user['role'] === 'ADMIN' || isContributor) { 
          this.isEditable = true;
        }

        // Calculate the bootcamp progress
        if (this.project.endOfModuleProject) {
          switch (this.project.endOfModuleProject) {
            case 'Module 1':
              this.bootcampProgress = 33;
              break;
            case 'Module 2':          
              this.bootcampProgress = 66;
              break;
            case 'Module 3':
              this.bootcampProgress = 100;
              break;
            default: 
              this.bootcampProgress = 0;
          }
        }
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
          this.router.navigate(['/projects']);
        });
    }
  }

  // Get a random gradiant from a list of gradiant
  getRandomGradiant() { 
    let randomIndex = Math.floor(Math.random() * this.gradiantList.length);
    return this.gradiantList[randomIndex];
  }
}