// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.scss']
})
export class HeaderSubComponent implements OnInit {

  bootcampLogo = "./assets/images/course-blue.png";

  constructor(
    // Dependency injections
    private session: SessionService
  ) { }

  ngOnInit() {
  }

}
