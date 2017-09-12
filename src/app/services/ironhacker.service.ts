// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';

// Services
import { SessionService } from './session.service';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class IronhackerService {
  
  // API URL
  API_BASE_URL = environment.API_BASE_URL;

  constructor(
    private http: Http,
    private session: SessionService
  ) { }

  // Observable error manager
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // GET the list of all ironhackers
  getIronhackerList() {
    return this.http.get(`${this.API_BASE_URL}/ironhackers`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET a ironhackers details
  getIronhacker(id) {
    return this.http.get(`${this.API_BASE_URL}/ironhackers/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // POST add a new ironhackers
  addIronhacker(ironhacker) {
    return this.http.post(`${this.API_BASE_URL}/ironhackers`, ironhacker, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // PUT update a ironhackers
  editIronhacker(ironhacker) {
    return this.http.put(`${this.API_BASE_URL}/ironhackers/${ironhacker.id}`, ironhacker, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  
  // DELETE a ironhackers
  removeIronhacker(id) {
    return this.http.delete(`${this.API_BASE_URL}/ironhackers/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // Add the token to the HTTP header
  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
