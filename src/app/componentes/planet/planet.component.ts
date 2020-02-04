import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';
import { Film } from '../../models/films.model';
import { Person } from '../../models/people.model';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet;
  films: Array<Film> = [];
  residents: Array<Person> = [];

  constructor(public service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getPlanet( id ).subscribe( (data: Planet) => {
      this.planet = data;
      $('html, body').animate({scrollTop: $('#planet').position().top}, 'slow');

      if ( this.planet.films.length > 0 ) {
        for (const film of this.planet.films) {
          this.getFilm(film);
        }
      }

      if ( this.planet.residents.length > 0 ) {
        for (const person of this.planet.residents) {
          this.getPerson(person);
        }
      }
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

  getFilm( endpoint: string ) {
    this.service.getByEndpoint( endpoint ).subscribe( (data: Film) => {
      this.films.push(data);
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

  getPerson( endpoint: string ) {
    this.service.getByEndpoint( endpoint ).subscribe( (data: Person) => {
      this.residents.push(data);
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

}