import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialImportsModule } from './material-imports';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
