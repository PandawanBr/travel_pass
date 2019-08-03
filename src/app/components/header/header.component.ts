import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged = true;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  home() {
    this.route.navigate(['/']);
  }
}
