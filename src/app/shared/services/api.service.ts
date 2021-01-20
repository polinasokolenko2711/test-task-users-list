import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

const endpointURL = 'assets/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get(endpointURL + '/user.mock-data.json')
        .pipe(map((users: any[]) => users.map(item => new User(item))));
  }
}
