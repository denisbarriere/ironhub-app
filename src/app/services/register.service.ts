// Angular packages
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// RxJS packages
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

// Services
import { SessionService } from './session.service';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {

  // API URL
  API_BASE_URL = environment.API_BASE_URL;

  constructor(
     private http: Http,
     private router: Router,
     private session: SessionService
  ) { }

   // Function handling the login process through the API /login route
  signup(user) {
    return this.http.post(`${this.API_BASE_URL}/signup`, user)
      .map(res => {
        let json = res.json();
        let token = json.token;
        let user = json.user;

        if (token) {
          this.session.token = token;
          this.session.user = {
            _id: user._id,
            email: user.email,
            role: user.role
          }
          this.session.isAuthenticated = true;
          localStorage.setItem('token', this.session.token);
        }
          
        return this.session.isAuthenticated;

      }).catch(this.session.handleError);
  }
}
