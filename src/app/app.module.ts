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



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent,
    LoginComponent
  ],
  exports: [
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
