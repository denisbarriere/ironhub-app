// Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-contributors',
  templateUrl: './project-contributors.component.html',
  styleUrls: ['./project-contributors.component.scss']
})
export class ProjectContributorsComponent implements OnInit {

  // Retrieve the relevant information from the parent component
  @Input() contributors: Array<Object>; // The list of contributors
  @Input() fullList: boolean; // Used to know if the component should display the full list of contributors not not

  maxNumberOfContributors: number = 2; // Maximum number of contributors displayed on the project listing page
  numberOfContributors: number = 0; // Total number of contributors for the project

  constructor() { }

  ngOnInit() {
    // If the component has to display all the contributors, then set the maxNumberOfContributors to the number of contributors
    if (!this.fullList) {
      // Save the number of contributors
      this.numberOfContributors = this.contributors.length;

      // Take the first x contributors 
      this.contributors.splice(this.maxNumberOfContributors, ); 
    }
  }

}
