import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmComponent } from './componentes/film/film.component';
import { SearchComponent } from './componentes/search/search.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { PeopleComponent } from './componentes/people/people.component';
import { ServiceService } from './service/service.service';
import {HomeComponent} from './componentes/home/home.component';
import { EspeciesComponent } from './componentes/especies/Especies.component';

import { RUTAS } from './app.routes';
import { StarshipsComponent } from './componentes/starships/starships.component';
import { VehiclesComponent } from './componentes/vehicles/vehicles.component';
import { FooterComponent } from './shares/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SearchComponent,
    NavbarComponent,
    PeopleComponent,
    HomeComponent,
    EspeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( RUTAS, { useHash: true })
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
