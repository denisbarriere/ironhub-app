//Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {

  // Retrieve the relevant information from the parent component
  @Input() endOfModuleProject: String;
  @Input() absolutePosition: String; // Used to know if the tag should be absolute positionned

  position: String = ''; // position class

  constructor() { }

  ngOnInit() {
    // Add the appropriate class if required (asked from the parent component)
    if (this.absolutePosition) {
      this.position = 'project-tag-absolute';
    } 
  }

}
