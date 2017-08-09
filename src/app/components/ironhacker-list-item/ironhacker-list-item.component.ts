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

  bootcampBgColors: Array<String> = ['web-dev-full-time','web-dev-part-time', 'uxui-design-full-time','uxui-design-part-time',''];
  noImageBgColorClass: String = this.getProgram(); // Get the last program the ironhacker attended

  constructor(
    // Dependency injections
    private router: Router,
    private ironhackerService: IronhackerService
  ) { }

  ngOnInit() {
    console.log("ironhacker",this.ironhacker);    
  }

  // Get a random gradiant from a list of gradiant
  getProgram() { 
    // console.log(this.ironhacker.bootcampIds[this.ironhacker.bootcampIds.length-1].program);
  
    // let index = Math.floor(Math.random() * this.bootcampBgColors.length);
    return this.bootcampBgColors[0];
  }


}
