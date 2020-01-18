import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  getFilms(){
    return this.http.get('https://swapi.co/api/films')
                  .pipe( map( data => {
                    return data['results'];
                  }));
  }

  getPeoples(){
    return this.http.get('https://swapi.co/api/people');
  }

  getPeople(id: string){
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }

  getDirection(url: string){
    return this.http.get(url);
  }

  getSpecies(){
    return this.http.get('https://swapi.co/api/species')
    .pipe( map( data => {
      return data['results'];
    }));
  }

}
