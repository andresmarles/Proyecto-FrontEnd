import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmComponent } from './componentes/film/film.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { PeopleComponent } from './componentes/people/people.component';
import { ServiceService } from './service/service.service';
import {HomeComponent} from './componentes/home/home.component';
import { EspeciesComponent } from './componentes/especies/especies.component';

import { RUTAS } from './app.routes';
import { StarshipsComponent } from './componentes/starships/starships.component';
import { VehiclesComponent } from './componentes/vehicles/vehicles.component';
import { FooterComponent } from './shares/footer/footer.component';
import { StarshipComponent } from './componentes/starship/starship.component';
import { SearchsComponent } from './componentes/searchs/searchs.component';
import { FilmsComponent } from './componentes/films/films.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    NavbarComponent,
    PeopleComponent,
    HomeComponent,
    EspeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FooterComponent,
    StarshipComponent,
    SearchsComponent,
    FilmsComponent
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
