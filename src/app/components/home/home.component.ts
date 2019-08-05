import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogged = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentIsLoggedUser.subscribe(res => this.isLogged = res);
  }

  login() {
    if (this.isLogged) {
      this.router.navigate(['/user']);
    } else {
      this.dialog.open(LoginComponent, {
        width: '500px',
      }).afterClosed().subscribe(res => {
        if (res === 'login') {
          this.router.navigate(['/user']);
        } else if (res === 'new-user') {
          this.router.navigate(['/new-user']);
        }
      });
    }
  }

  cadastro() {
    this.router.navigate(['/filters']);
  }
}
