import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialImportsModule } from './material-imports';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    PerguntasComponent,
    ListComponent,
    UserComponent,
    NewUserComponent
  ],
  exports: [
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
