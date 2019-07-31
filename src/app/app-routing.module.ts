import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerguntasComponent } from './components/perguntas/perguntas.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'perguntas',
    component: PerguntasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
