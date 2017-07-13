import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(name) {
    return this.http.get('https://api.github.com/search/users?per_page=12&q='+name)
        .map((res:Response) => res.json());
  }

  getUserInfo(userName) {
    return this.http.get('https://api.github.com/users/'+userName)
        .map((res:Response) => res.json());
  }
}
