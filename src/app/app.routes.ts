import { Routes } from '@angular/router';
import { FilmComponent } from './componentes/film/film.component';
import { FilmsComponent } from './componentes/films/films.component';
import { PeopleComponent } from './componentes/people/people.component';
import {HomeComponent} from './componentes/home/home.component';
import {EspeciesComponent} from './componentes/especies/Especies.component';
import { StarshipsComponent } from './componentes/starships/starships.component';
import { VehiclesComponent } from './componentes/vehicles/vehicles.component';
import { StarshipComponent } from './componentes/starship/starship.component';
import { SearchsComponent } from './componentes/searchs/searchs.component';

export const RUTAS: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: 'peliculas', component: FilmsComponent },
    { path: 'pelicula/:id', component: FilmComponent },
    { path: 'personaje/:id', component: PeopleComponent },
    { path: 'busqueda', component: SearchsComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'especies', component: EspeciesComponent },
    { path: 'naves', component: StarshipsComponent },
    { path: 'nave/:id', component: StarshipComponent },
    { path: 'vehiculos', component: VehiclesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'film'}
]

