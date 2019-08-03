import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listTrips = LIST_TRIPS;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltar() {
    this.route.navigate(['/filters']);
  }

  homePage() {
    this.route.navigate(['/']);
  }
}

const LIST_TRIPS = [
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
  {name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York'},
];
