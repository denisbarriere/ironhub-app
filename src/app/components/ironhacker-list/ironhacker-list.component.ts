// Angular
import { Component, OnInit } from '@angular/core';

// services
import { IronhackerService } from '../../services/ironhacker.service';

// Environment variables
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ironhacker-list',
  templateUrl: './ironhacker-list.component.html',
  styleUrls: ['./ironhacker-list.component.scss']
})
export class IronhackerListComponent implements OnInit {
  
  ironhackers = [{}]; // Retrive the ironhackers from the API
  numberOfIronhackers: number = 0; // Total number of ironhackers
  searchKeywords: string; // Used to retrieve the keywords to filter the list
  campuses: Array<String>  = environment.CAMPUSES; // List of bootcamps found in the drop down
  programs: Array<String>  = environment.PROGRAMS; // List of campuses found in the drop down
  campus: String = 'default'; // Campus drop down
  bootcamp: String = 'default'; // Program drop down

  constructor(
    // Dependency injections
    private ironhacker: IronhackerService
  ) {}

  ngOnInit() {
    
    // Get the list of projects
    this.ironhacker.getIronhackerList()
      .subscribe((ironhackers) => {
        this.ironhackers = ironhackers;

        // Retrieve the number of ironhackers found
        this.numberOfIronhackers = this.ironhackers.length;
      });
  }
}
