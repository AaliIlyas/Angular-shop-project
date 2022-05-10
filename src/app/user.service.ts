import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: IUser | undefined;

  // get user() : IUser | undefined {
  //   return this._user;
  // }

  // set user(user: IUser | undefined) {
  //   this._user = user;
  // }
}


