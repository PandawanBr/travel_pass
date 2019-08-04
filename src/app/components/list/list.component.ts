import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listTrips = LIST_TRIPS;

  isLogged = false;

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.currentIsLoggedUser.subscribe(res => this.isLogged = res);
  }

  voltar() {
    this.route.navigate(['/filters']);
  }

  homePage() {
    this.route.navigate(['/']);
  }

  showTrip(value) {
    window.open(value.image, '_blank');
  }
}

const LIST_TRIPS = [
  { name: 'New York', image: '../../../assets/newYork.jpeg', value: 1700.00, description: 'Voo de ida e volta até Nova York' },
  { name: 'Rio de Janeiro', image: '../../../assets/rio.jpg', value: 450.00, description: 'Voo de ida e volta até o Rio de Janeiro' },
  {
    name: 'Porto de Galinhas', image: '../../../assets/portoGalinhas.jpg', value: 2700.00,
    description: 'Voo de ida e volta até Porto de Galinhas com hotel'
  },
  {
    name: 'Peru', image: '../../../assets/laguna69.jpg', value: 4700.00,
    description: 'Voo de ida e volta, com hotel e trilha até Laguna 69'
  },
  { name: 'Paris', image: '../../../assets/paris.jpg', value: 2600.00, description: 'Voo de ida e volta até Paris' },
  { name: 'Roma', image: '../../../assets/roma.jpg', value: 5200.00, description: 'Voo de ida e volta até Roma, com visita ao Coliseu' },
];
