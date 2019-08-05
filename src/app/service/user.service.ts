import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'app/model/user.model';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  private userList: User[] = [];

  private users = new BehaviorSubject<User[]>(null);
  currentUsers = this.users.asObservable();

  private loggedUser = new BehaviorSubject<User>(null);
  currentLoggedUser = this.loggedUser.asObservable();

  private isloggedUser = new BehaviorSubject<boolean>(false);
  currentIsLoggedUser = this.isloggedUser.asObservable();

  constructor() { }

  canActivate() {
    return this.isloggedUser.getValue();
  }

  changeStatusUser(value: boolean): void {
    this.isloggedUser.next(value);
  }

  addUser(value: User): void {
    value.id = this.userList.length + 1;
    this.userList.push(value);
    this.users.next(this.userList);
  }

  setCurrentUser(value: User) {
    this.loggedUser.next(value);
  }

  makeLogin(value: User): boolean {
    if (this.userList.length > 0) {
      for (let i = 0; i <= this.userList.length; i++) {
        if (this.userList[i].email === value.email && this.userList[i].senha === value.senha) {
          this.setCurrentUser(this.userList[i]);
          return true;
        }
      }
    }
    return false;
  }

  logout() {
    this.isloggedUser.next(false);
    this.loggedUser.next(null);
  }

  updateUser(value: User) {
    this.loggedUser.next(value);
  }
}
