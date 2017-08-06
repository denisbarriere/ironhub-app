// Agngular packages
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Information from the login form
  user: Object = {
		email: '',
    password: ''
  }

  // Error message retrieved from the API call
  error = null;

  constructor(
    // Dependency injections
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Function called when the user clicks the sign in button
  login() {
    this.session.login(this.user).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
