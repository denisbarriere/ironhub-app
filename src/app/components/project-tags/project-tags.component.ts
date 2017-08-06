//Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {

  // Retrieve the relevant information from the parent component
  @Input() type: String;
  @Input() endOfModuleProject: String;

  constructor() { }

  ngOnInit() {
  }

}
