import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent {

  film: any[] = [];
  people: any[] = [];

  constructor( private router: ActivatedRoute,
               private service: ServiceService,
               private ruta: Router  ) { 
      this.router.params.subscribe( params => {
        this.getFilms( params['id'] );
      });
  }

  getFilms (id: number) {
    this.service.getFilms()
        .subscribe( (data: any) => {
          console.log(data[id]);
          this.film = data[id];
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
    this.ruta.navigate(['/personaje', id]);
  }

}
