import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: User[] = [];

  private users = new BehaviorSubject<User[]>(null);
  currentUsers = this.users.asObservable();

  private loggedUser = new BehaviorSubject<User>(null);
  currentLoggedUser = this.loggedUser.asObservable();

  private isloggedUser = new BehaviorSubject<boolean>(false);
  currentIsLoggedUser = this.isloggedUser.asObservable();

  constructor() { }

  changeStatusUser(value: boolean): void {
    this.isloggedUser.next(value);
  }

  addUser(value: User): void {
    this.userList.push(value);
    this.users.next(this.userList);
  }

  setCurrentUser(value: User) {
    this.loggedUser.next(value);
  }

  makeLogin(value: User): boolean {
    if (this.userList.length > 0) {
      for (let i = 0; i <= this.userList.length; i++) {
        return (this.userList[i].email === value.email && this.userList[i].senha === value.senha);
      }
    }
    return false;
  }
}
