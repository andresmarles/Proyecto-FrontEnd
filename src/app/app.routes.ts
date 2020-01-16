import { Routes } from '@angular/router';
import { FilmComponent } from './componentes/film/film.component';
import { PeopleComponent } from './componentes/people/people.component';
import { SearchComponent } from './componentes/search/search.component';

export const RUTAS: Routes = [
    { path: 'film', component: FilmComponent },
    { path: 'people/:id', component: PeopleComponent },
    { path: 'search',component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'film'},
    { path: '**', pathMatch: 'full', redirectTo: 'film'}
]