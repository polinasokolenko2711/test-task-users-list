import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: Subject<User[]> = new Subject<User[]>();

  private _users: User[] = [];

  constructor() { }

  public setUsers(users: User[]) {
    this._users = users;
    this.users$.next(this._users);
  }

  public updateUser(user: User) {
    this._users = this._users
        .map(item => item.id === user.id ? user : item);
    this.users$.next(this._users);
  }

  public deleteUser(user: User) {
    this._users = this._users
        .filter(item => item.id !== user.id);
    this.users$.next(this._users);
  }

  public addUser(user: User) {
    this._users = [ ...this._users, { ...user, id: Math.random() * 2}];
    this.users$.next(this._users);
  }
}
