// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

// RxJSs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {

  // API URL
  API_BASE_URL = environment.API_BASE_URL;

  public user = {};
  public token = '';
  public isAuthenticated = false;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  // Function managing the errors from Observables
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // Angular interface used to enable routes for logged-in users only 
  canActivate(): Observable<boolean> | boolean {
    let token = localStorage.getItem('token');

    if (token) {
      let headers = new Headers({ 'Authorization': `JWT ${token}` });
      let options = new RequestOptions({ headers: headers });

      return this.http.get(`${this.API_BASE_URL}/token`, options)
        .map((data) => {
          if (data) {
            let dataJson = data.json();

            this.isAuthenticated = true;
            this.token = token;
            this.user = {
              _id: dataJson.user._id,
              email: dataJson.user.email,
              firstName: dataJson.user.firstName,
              role: dataJson.user.role
            }
            return true;
          }
          return false;
        })
        .catch(this.handleError);
    }
    else {
      this.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }

  // Function handling the login process through the API /login route
  login(user) {
    return this.http.post(`${this.API_BASE_URL}/login`, user)
      .map(res => {
        let json = res.json();
        let token = json.token;
        let user = json.user;

        if (token) {
          this.token = token;
          this.user = {
            _id: user.id,
            email: user.email,
            firstName: user.firstName,
            role: user.role
          }
          this.isAuthenticated = true;
          localStorage.setItem('token', this.token);
        }
          
        return this.isAuthenticated;

      }).catch(this.handleError);
  }

  // function in charge of the logout
  logout() {
    this.token = '';
    this.user = {}
    this.isAuthenticated = false;
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
