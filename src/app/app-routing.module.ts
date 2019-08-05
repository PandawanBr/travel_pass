import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserService } from './service/user.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'filters',
    component: PerguntasComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [UserService],
  },
  {
    path: 'new-user',
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
