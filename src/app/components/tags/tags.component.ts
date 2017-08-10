//Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  // Retrieve the relevant information from the parent component
  @Input() item: String; // The tag to display
  @Input() absolutePosition: String; // Used to know if the tag should be absolute positionned

  itemTypeClass: String; // Class of the item based on what it is (different colours)
  positionClass: String = ''; // Class used to position the tag dynamically

  constructor() { }

  ngOnInit() {

    // Add the appropriate class if required (asked from the parent component)
    if (this.absolutePosition) {
      this.positionClass = 'tag-absolute';
    } 

    // Set the right classes based on the items
    switch(this.item) {
      case 'Web Development Bootcamp':
        this.itemTypeClass = 'is-web-dev';
        this.item = 'Web Development';
        break;
      case 'UX/UI Design Bootcamp':
        this.itemTypeClass = 'is-uiux';
        this.item = 'UX/UI Design';
        break;
      case 'Web Development Part-Time':
        this.itemTypeClass = 'is-web-dev-part-time';
        this.item = 'Web Dev Part-Time'
        break;
      case 'UX/UI Design Part-Time':
        this.itemTypeClass = 'is-uiux-part-time';
        this.item = 'UX/UI Part-Time';
        break;
      case 'Module 1': case 'Module 2':
        this.itemTypeClass = 'is-white';
        break;
      case 'Module 3':
        this.itemTypeClass = 'is-warning';
        this.item = 'Final';
        break;
      default: 
        this.itemTypeClass = 'is-light';
      }
  }

}
