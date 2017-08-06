// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // Information from the sign form
  user: Object = {
		email: '',
    password: ''
  }

  // Error message retrieved from the API call
  error = null;
  
  constructor(
    // Dependency injections
    private register: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Function called when the user clicks the sign up button
  signup() {
    this.register.signup(this.user).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
