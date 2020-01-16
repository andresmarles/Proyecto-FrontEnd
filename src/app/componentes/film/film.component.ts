import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent{

  films: any[]= [];

  constructor( private service: ServiceService) {
    this.service.getFilms()
      .subscribe( (data: any) => {
        console.log(data);
        this.films = data;
    });
  }

}
