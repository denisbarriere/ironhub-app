// Angular
import { Component, OnInit } from '@angular/core';

// services
import { IronhackerService } from '../../services/ironhacker.service';

@Component({
  selector: 'app-ironhacker-list',
  templateUrl: './ironhacker-list.component.html',
  styleUrls: ['./ironhacker-list.component.scss']
})
export class IronhackerListComponent implements OnInit {
  ironhackers = [{}]; // Retrive the ironhackers from the API
  numberOfIronhackers: number = 0; // Total number of ironhackers

  constructor(
    // Dependency injections
    private ironhacker: IronhackerService
  ) { }

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
