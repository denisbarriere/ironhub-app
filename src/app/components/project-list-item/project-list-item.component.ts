//Angular
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// Javacript libraries
import * as _ from 'lodash';

// services
import { ProjectService } from '../../services/project.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {

  @Input() project: any; // Retrive the project information from the parent component
  @Output() onProjectDelete = new EventEmitter<string>();

  fullList: boolean = false; // Used by the project-contributors component
  isEditable: boolean; // Used to know if the actions (edit, delete) should be displayed
  absolutePosition: boolean = true; // Used for positioning the tag component
  gradiantList: Array<String> = ['grad-from-pink-to-orange','grad-from-purple-to-pink', 'grad-from-red-to-pink'];
  noImageBgColorClass: String = this.getRandomGradiant(); // Get a random gradiant when no project images are found

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private session: SessionService
  ) { }

  
  ngOnInit() {
    
    // Check if the logged-in user is an admin or a contributor of the project
    let isContributor = _.findKey(this.project.contributors, (contributor) => {
      return contributor['_id'] === this.session.user['_id']
    });
    
    // If so, the logged-in user can edit
    if(this.session.user['role'] === 'ADMIN' || isContributor) { 
      this.isEditable = true;
    }
  }

  // Get a random gradiant from a list of gradiant
  getRandomGradiant() { 
    let randomIndex = Math.floor(Math.random() * this.gradiantList.length);
    return this.gradiantList[randomIndex];
  }

  // Delete the current project
  deleteProject() {
    if (window.confirm('Are you sure?')) {
      // Propagate the event to the parent component
      this.onProjectDelete.emit(this.project._id);
    }
  }
}
