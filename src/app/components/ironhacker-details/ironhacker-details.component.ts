// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

// services
import { IronhackerService } from '../../services/ironhacker.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-ironhacker-details',
  templateUrl: './ironhacker-details.component.html',
  styleUrls: ['./ironhacker-details.component.scss']
})
export class IronhackerDetailsComponent implements OnInit {

  // Local component variables
  ironhacker: any; // Ironhacker details retrieved from the API call
  ironhackerLastBootcamp; // Ironhacker last bootcamp attended
  gradiantList: Array<String> = ['grad-from-pink-to-orange','grad-from-purple-to-pink', 'grad-from-red-to-pink'];
  heroBgColorClass: String = this.getRandomGradiant(); // Get a random gradiant when no project images are found
  absolutePosition: boolean = false; // Used for positioning the tag component
  messengerProfile: String = ''; // Used to show messenger profile information on mouse over
  messengerClass: String = 'messenger-off';
  infoTabClass: string = 'is-active'; // First tab activated by default
  
  // Tabs visibility
  bootcampTabClass: string = ''; // Second tab deactivated by default
  proTabClass: string = ''; // Third tab deactivated by default

  // Tabs content
  infoTabContent: string = 'is-visibile';
  bootcampTabContent: string = 'is-hidden';
  proTabContent: string = 'is-hidden';

  constructor(
    // Dependency injections
    private router: Router,
    private route: ActivatedRoute,
    private ironhackerService: IronhackerService,
    private session: SessionService
  ) { }

  ngOnInit() {
    // Retrieve the param from the URL and call the local function to retrieve the ironhacker info
    this.route.params.subscribe(params => {
      this.getIronhackerDetails(params['id']);
    });
  }

  // Get the ironhacker details from the API
  getIronhackerDetails(id) {
    this.ironhackerService.getIronhacker(id)
      .subscribe((ironhacker) => {
        this.ironhacker = ironhacker;

        // Set the last bootcamp attended
        this.ironhackerLastBootcamp = this.ironhacker.studentId.bootcampIds[this.ironhacker.studentId.bootcampIds.length -1];
      });
  }

  getLastBootcampBgClass() {
    // Depending on the last bootcamp the ironhacker attended
    // switch(this.ironhacker.studentId.bootcampIds[this.ironhacker.studentId.bootcampIds.length -1].program) {
    //   case 'Web Development Bootcamp': 
    //     return 'is-web-dev';
    //   case 'UX/UI Design Bootcamp':
    //     return 'is-uiux';
    //   case 'Web Development Part-Time':
    //     return 'is-web-dev-part-time';
    //   case 'UX/UI Design Part-Time': 
    //     return 'is-uiux-part-time';
    //   default: 
    //     return 'is-light';
    // }
    return 'is-light';
  }

  // Get a random gradiant from a list of gradiant
  getRandomGradiant() { 
    let randomIndex = Math.floor(Math.random() * this.gradiantList.length);
    return this.gradiantList[randomIndex];
  }

  // On mouse overing messenger icons
  over(item) {
    this.messengerProfile = item;
    this.messengerClass = 'messenger-on';
  }

  // On mouse lease of the messenger icons
  leave() {
    this.messengerProfile = '';
    this.messengerClass = 'messenger-off';
  }

  // Put all the tabs inactive
  resetTabActiveClass() {
    this.infoTabClass = '';
    this.bootcampTabClass = '';
    this.proTabClass = '';
  }

  // Hide all tabs content
  hideAllTabsContent() {
    this.infoTabContent = 'is-hidden';
    this.bootcampTabContent = 'is-hidden';
    this.proTabContent = 'is-hidden';
  }

  switchTab(tab) {
    // Clean all tabs
    this.resetTabActiveClass();
    this.hideAllTabsContent();

    // Show the right tab
    switch (tab) {
      case 'info':
        this.infoTabClass = 'is-active';
        this.infoTabContent = 'is-visible';
        break;
      case 'bootcamp':
        this.bootcampTabClass = 'is-active';
        this.bootcampTabContent = 'is-visible';
        break;
      case 'pro':
        this.proTabClass = 'is-active';
        this.proTabContent = 'is-visible';
        break;
      default: 
        console.log('switchTab(): Wrong tab name');
    }
  }
}