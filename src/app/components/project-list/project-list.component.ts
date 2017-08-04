// Angular
import { Component, OnInit } from '@angular/core';

// services
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects;
  rowCount: Number;

  constructor(
    private project: ProjectService
  ) { }

  ngOnInit() {
    this.project.getProjectList()
      .subscribe((projects) => {
        this.projects = projects;
      });

      
    
    // this.rowCount = Math.floor(this.projects.length / 4);
    //   if (this.projects.length % 4 > 0) {
    //     rowCount += 1;
    //   }
    //   toolIndex = 0;
    //   tool
    //   for (let row = 0; row < rowCount; row++) {


  }
}
