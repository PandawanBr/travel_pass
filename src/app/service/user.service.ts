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

  private loggedUser = new BehaviorSubject<boolean>(false);
  currentLoggedUser = this.loggedUser.asObservable();

  constructor() { }

  changeStatusUser(value: boolean): void {
    this.loggedUser.next(value);
  }

  addUser(value: User): void {
    this.userList.push(value);
    this.users.next(this.userList);
  }

  makeLogin(value: User): boolean {
    console.log('input', value);
    if (this.userList.length > 0) {
      for (let i = 0; i <= this.userList.length; i++) {
        console.log('for', this.userList[i]);
        return (this.userList[i].email === value.email && this.userList[i].senha === value.senha);
      }
    }
    return false;
  }
}
