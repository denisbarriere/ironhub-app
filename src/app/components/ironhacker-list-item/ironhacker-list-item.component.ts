// Angular
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// services
import { IronhackerService } from '../../services/ironhacker.service';

// Environment variables
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ironhacker-list-item',
  templateUrl: './ironhacker-list-item.component.html',
  styleUrls: ['./ironhacker-list-item.component.scss']
})
export class IronhackerListItemComponent implements OnInit {

  @Input() ironhacker: any; // Retrive the ironhacker information from the parent component

  // Profile default image from environment variable
  DEFAULT_PROFILE_IMG_URL = environment.DEFAULT_PROFILE_IMG_URL;
 

  absolutePosition: boolean = true; // Used for positioning the tag component
  gradiantList: Array<String> = ['grad-from-pink-to-orange','grad-from-purple-to-pink', 'grad-from-red-to-pink'];
  profileBgColorClass: String; // Get a random gradiant when no project images are found

  constructor(
    // Dependency injections
    private router: Router,
    private ironhackerService: IronhackerService
  ) { }

  ngOnInit() {
    // Init the background color and default profile pictures
    this.profileBgColorClass = this.setBackgroundAndDefaultProfileImage()
  }

  // Get a random gradiant from a list of gradiant
  setBackgroundAndDefaultProfileImage() { 
    if (!this.ironhacker.pictureUrl || this.ironhacker.pictureUrl === this.DEFAULT_PROFILE_IMG_URL) {
      // If no profile image, set the image to the default URL
      this.ironhacker.pictureUrl = this.DEFAULT_PROFILE_IMG_URL;
    } 
    // Find a random background color
    // let randomIndex = Math.floor(Math.random() * this.gradiantList.length);
    // return this.gradiantList[randomIndex];

    // Set the right background image based on the program
    switch(this.ironhacker.studentId.bootcampIds[this.ironhacker.studentId.bootcampIds.length-1].program) {
      case 'Web Development Bootcamp':
        return this.gradiantList[0];
      case 'UX/UI Design Bootcamp':
        return this.gradiantList[1];
      case 'Web Development Part-Time':
        return this.gradiantList[2];
      case 'UX/UI Design Part-Time':
        return this.gradiantList[3];
      default: 
      return 'no-profile-picture-bg';
    }
  }
}
