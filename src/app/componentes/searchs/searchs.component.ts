import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent {

  resultados: any[] = [];
  peliculas: any[] = [];

  constructor( private service: ServiceService,
               private router: Router ) {}



  buscar( termino: string){
    this.service.getFilm(termino)
        .subscribe( (data: any) => {
            console.log(data);
            this.resultados = data;
        });
  }

  getPelicula( url: string){
    let id = url.substr(27, 1);
    if ( id.charAt(1) === '/' ) {
      id = id.substr(0, 1);
    }
    console.log(id);
    this.router.navigate(['/pelicula', id])
  }

}
