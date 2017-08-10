// Angular
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { IronhackerService } from '../../services/ironhacker.service';

@Component({
  selector: 'app-ironhacker-list-item',
  templateUrl: './ironhacker-list-item.component.html',
  styleUrls: ['./ironhacker-list-item.component.scss']
})
export class IronhackerListItemComponent implements OnInit {

  @Input() ironhacker: any; // Retrive the ironhacker information from the parent component

  absolutePosition: boolean = true; // Used for positioning the tag component
  bootcampBgColors: Array<String> = ['web-dev-full-time','web-dev-part-time', 'uxui-design-full-time','uxui-design-part-time',''];
  gradiantList: Array<String> = ['grad-from-pink-to-orange','grad-from-purple-to-pink', 'grad-from-red-to-pink'];
  profileBgColorClass: String = this.getRandomGradiant(); // Get a random gradiant when no project images are found

  constructor(
    // Dependency injections
    private router: Router,
    private ironhackerService: IronhackerService
  ) { }

  ngOnInit() {
  }

  // Get a random gradiant from a list of gradiant
  getRandomGradiant() { 
    let randomIndex = Math.floor(Math.random() * this.gradiantList.length);
    return this.gradiantList[randomIndex];
  }
}
