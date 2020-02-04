import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Starship } from '../../models/starships.model';
import { Film } from '../../models/films.model';
import { Person } from '../../models/people.model';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship: Starship;
  films: Array<Film> = [];
  pilots: Array<Person> = [];

  constructor(public service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getStarship( id ).subscribe( (data: Starship) => {
      this.starship = data;
      $('html, body').animate({scrollTop: $('#starship').position().top}, 'slow');

      if( this.starship.films.length > 0 ) {
        for (let film of this.starship.films) {
          this.getFilm(film);
        }
      }

      if( this.starship.pilots.length > 0 ) {
        for (let person of this.starship.pilots) {
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
      this.pilots.push(data);
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

}
