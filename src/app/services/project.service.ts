// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

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
export class ProjectService {

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

  // GET the list of all projects
  getProjectList(limit?: number, offset?: number) {
    
    // If there is a limit and offset, then call the API with these parameters to limit the number of projects in the response
    if (limit >= 0 && offset >= 0) {
       
      return this.http.get(`${this.API_BASE_URL}/projects?limit=${limit}&offset=${offset}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);

     } else {

      return this.http.get(`${this.API_BASE_URL}/projects`, this.requestOptions())
        .map((res) => res.json())
        .catch(this.handleError);

    }
  }

  // GET the list of all projects for a project
  getProjectListById(id) {
    return this.http.get(`${this.API_BASE_URL}/projects?ironhacker=${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET a project details
  getProject(id) {
    return this.http.get(`${this.API_BASE_URL}/projects/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // POST add a new project
  addProject(project) {
    return this.http.post(`${this.API_BASE_URL}/projects`, project, this.requestOptions())
      .map((res) => { 
        return { status: res.status, res: res.json } 
      })
      .catch(this.handleError);
  }

  // PUT update a project
  editProject(project) {
    return this.http.put(`${this.API_BASE_URL}/projects/${project._id}`, project, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  
   // PUT add contributors to a project
  addProjectContributors(project, contributors) {
    return this.http.put(`${this.API_BASE_URL}/projects/${project._id}/contributors`, contributors, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // DELETE a project
  removeProject(id) {
    return this.http.delete(`${this.API_BASE_URL}/projects/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // Add the token to the HTTP header
  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
