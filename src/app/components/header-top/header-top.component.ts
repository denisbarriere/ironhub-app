// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  logoFullPath = './assets/images/ironhub-logo.png'

  constructor(
    // Dependency injections
    private session: SessionService
  ) { }

  ngOnInit() {
  }

  // Function called when the user clicks the sign out button
  logout() {
    this.session.logout();
  }
}
