import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { MatDialog } from '@angular/material';
import { ListDetailComponent } from '../list-detail/list-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listTrips = LIST_TRIPS;

  isLogged = false;

  constructor(
    private dialog: MatDialog,
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
    this.dialog.open(ListDetailComponent, {
      data: value,
      width: '600px',
    });
    // window.open(value.image, '_blank');
  }
}

const LIST_TRIPS = [
  {
    name: 'New York',
    image: '../../../assets/newYork.jpeg',
    value: 1700.00,
    description: 'Voo de ida e volta até Nova York',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Rio de Janeiro',
    image: '../../../assets/rio.jpg',
    value: 450.00,
    description: 'Voo de ida e volta até o Rio de Janeiro',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Porto de Galinhas',
    image: '../../../assets/portoGalinhas.jpg',
    value: 2700.00,
    description: 'Voo de ida e volta até Porto de Galinhas com hotel',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Peru',
    image: '../../../assets/laguna69.jpg',
    value: 4700.00,
    description: 'Voo de ida e volta, com hotel e trilha até Laguna 69',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Paris',
    image: '../../../assets/paris.jpg',
    value: 2600.00,
    description: 'Voo de ida e volta até Paris',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Roma',
    image: '../../../assets/roma.jpg',
    value: 5200.00,
    description: 'Voo de ida e volta até Roma, com visita ao Coliseu',
    // tslint:disable-next-line:max-line-length
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
];
