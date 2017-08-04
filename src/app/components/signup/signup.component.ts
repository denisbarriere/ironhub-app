// Angular package
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

  user: Object = {
		email: '',
    password: ''
  }

  error = null;
  
  constructor(
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
