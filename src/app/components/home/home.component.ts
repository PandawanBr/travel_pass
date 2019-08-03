import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
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

  cadastro() {
    this.router.navigate(['/filters']);
  }
}
