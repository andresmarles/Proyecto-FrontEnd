import { Routes } from '@angular/router';
import { FilmComponent } from './componentes/film/film.component';
import { PeopleComponent } from './componentes/people/people.component';
import { SearchComponent } from './componentes/search/search.component';
import {HomeComponent} from './componentes/home/home.component';
import {EspeciesComponent} from './componentes/especies/Especies.component';
import { StarshipsComponent } from './componentes/starships/starships.component';
import { VehiclesComponent } from './componentes/vehicles/vehicles.component';

export const RUTAS: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},
    { path: 'peliculas', component: FilmComponent },
    { path: 'personaje/:id', component: PeopleComponent },
    { path: 'busqueda', component: SearchComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'especies', component: EspeciesComponent },
    { path: 'naves', component: StarshipsComponent },
    { path: 'vehiculos', component: VehiclesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'film'}
]

