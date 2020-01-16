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

}
