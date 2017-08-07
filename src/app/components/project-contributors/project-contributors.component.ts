// Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-contributors',
  templateUrl: './project-contributors.component.html',
  styleUrls: ['./project-contributors.component.scss']
})
export class ProjectContributorsComponent implements OnInit {

  // Retrieve the relevant information from the parent component
  @Input() contributors: Array<Object>;

  maxNumberOfContributors = 4;

  constructor() { }

  ngOnInit() {
  }

}
