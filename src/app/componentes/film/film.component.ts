import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent {

  films: any[] = [];
  people: any[] = [];

  constructor( private service: ServiceService,
               private router: Router ) {
    this.service.getFilms()
      .subscribe( (data: any) => {
        console.log(data);
        console.log(data['characters']);
        this.films = data;
    });
  }

  getPeople( url: string){

    let id = url.substr(28, 2);
    if ( id.charAt(1) === '/' ) {
      id = id.substr(0, 1);
    }
    console.log(id);
    this.service.getDirection(url)
          .subscribe( (people: any) => {
            console.log(people);
            console.log(people.name);
            this.people = people.name;
          });
    this.router.navigate(['/people', id])
  }

}
