import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  getIdByUrl(url: string) {
    const find = url.match(/([0-9])+/g);
    return find[0];
  }
  getImageById(url: string, type: string) {
    const find = url.match(/([0-9])+/g);
    const id = find[0];
    return 'assets/img/' + type + '/' + id + '.jpg';
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films')
      .pipe( map( (data: any) => {
        return data.results;
      }));
  }
  getFilm(termino: string) {
    return this.http.get(`https://swapi.co/api/films/?search=${termino}`)
      .pipe( map( (data: any) => {
        return data.results;
      }));
  }

  getPeoples() {
    return this.http.get('https://swapi.co/api/people');
  }

  getPeople(id: string) {
    return this.http.get(`https://swapi.co/api/people/${id}`);
  }

  getDirection(url: string) {
    return this.http.get(url);
  }

  getSpecies() {
    return this.http.get('https://swapi.co/api/species')
    .pipe( map( (data: any) => {
      return data.results;
    }));
  }

  // STARSHIPS
  getStarships() {
    return this.http.get( environment.apiURL + 'starships' );
  }
  getStarship(id: string) {
    return this.http.get( `${environment.apiURL}starships/${id}` );
  }
  getStarshipsURL(url: string) {
    return this.http.get( url );
  }

  // VEHICLES
  getVehicles() {
    return this.http.get( environment.apiURL + 'vehicles' );
  }
  getVehicle(id: string) {
    return this.http.get( `${environment.apiURL}vehicles/${id}` );
  }
  getVehiclesURL(url: string) {
    return this.http.get( url );
  }

  // RESPONSE DATA
  getByEndpoint( endpoint: string ) {
    return this.http.get( endpoint );
  }
}
