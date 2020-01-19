import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  getFilms() {
    return this.http.get( environment.apiURL + 'films')
                  .pipe( map( data => {
                    return data['results'];
                  }));
  }

  getPeoples() {
    return this.http.get( environment.apiURL + 'people');
  }

  getPeople(id: string){
    return this.http.get( environment.apiURL + `people/${id}`);
  }

  getDirection(url: string){
    return this.http.get(url);
  }

  getSpecies() {
    return this.http.get(environment.apiURL + 'species')
    .pipe( map( data => {
      return data['results'];
    }));
  }

  // STARSHIPS
  getStarships() {
    return this.http.get( environment.apiURL + 'starships');
  }
  getStarship(id: string){
    return this.http.get( environment.apiURL + `starships/${id}`);
  }
}
