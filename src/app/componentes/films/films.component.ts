import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent  {

  resultados: any[] = [];
  peliculas: any[] = [];

  constructor( private service: ServiceService,
               private router: Router ) {

    this.service.getFilms()
        .subscribe( (data: any) => {
            console.log(data);
            this.resultados = data;
        });
  }

  getPelicula( url: string){
    console.log('valor raro es', url);
    let id = url.substr(27, 1);
    if ( id.charAt(1) === '/' ) {
      id = id.substr(0, 1);
    }
    console.log(id);
    this.router.navigate(['/pelicula', id])
  }

}
