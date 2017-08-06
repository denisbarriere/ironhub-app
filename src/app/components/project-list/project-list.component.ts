// Angular
import { Component, OnInit } from '@angular/core';

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
  numberOfRows: number = 0; // Number of rows in the project grid
  numberOfColumns: number = 4; // Number of colums in the project grid
  numberOfProjects: number = 0; // Total number of projects
  projectsPerRow: Array<any> = []; // Array of project object (columns) per row
  projectIndex: number = 0; // Index used to populate the projectsPerRow Array

  constructor(
    // Dependency injections
    private project: ProjectService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.project.getProjectList()
      .subscribe((projects) => {
        this.projects = projects;
    
        // Retrieve the number of projects found
        this.numberOfProjects = this.projects.length;

        // Calculate the number of rows to display in the grid
        this.numberOfRows = Math.round(this.projects.length / this.numberOfColumns);

        /* Built the array used for the first ngFor. The number of elements is the number of rows.
           Each element is an array including each project for this row
           Example for 2 rows and 2 columns:
            [
              [ {project 1(row0/col0)}, {project 2(row0/col1)} ],
              [ {project 3(row1/col0)}, {project 4(row1/col1)} ]
            ]
        */
        for (let row = 0; row < this.numberOfRows; row += 1) {
          
          // Declare working array
          let projectsToAddToRow = [];

          // Build the array of projects per row
          for (let col = 0; col < this.numberOfColumns; col += 1) {
          
            // If there is a project at this index, push it to the working array
            if (this.projects[this.projectIndex]) {
              projectsToAddToRow.push(this.projects[this.projectIndex]);
            }

            // Inscrease the project counter
            this.projectIndex += 1;
          }
     
          // Push the list of projects in the row to the appropriate array
          this.projectsPerRow.push(projectsToAddToRow);
        }
      });
  }
}
