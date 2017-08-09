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

  bootcampBgColorClass: String = 'web-dev-full-time';

  constructor(
    // Dependency injections
    private router: Router,
    private ironhackerService: IronhackerService
  ) { }

  ngOnInit() {
  }

}
