import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  currentUser: User = null;

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentIsLoggedUser.subscribe(res => this.isLogged = res);

    this.userService.currentLoggedUser.subscribe((user: User) => this.currentUser = user);
  }

  home() {
    this.route.navigate(['/']);
  }

  showUser() {
    this.route.navigate(['/user']);
  }

  logout() {
    this.userService.logout();
  }
}
