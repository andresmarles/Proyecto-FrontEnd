import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicles.model';
import { Film } from '../../models/films.model';
import { Person } from '../../models/people.model';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle;
  films: Array<Film> = [];
  pilots: Array<Person> = [];

  constructor(public service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getVehicle( id ).subscribe( (data: Vehicle) => {
      this.vehicle = data;
      $('html, body').animate({scrollTop: $('#vehicle').position().top}, 'slow');

      if ( this.vehicle.films.length > 0 ) {
        for (const film of this.vehicle.films) {
          this.getFilm(film);
        }
      }

      if ( this.vehicle.pilots.length > 0 ) {
        for (const person of this.vehicle.pilots) {
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
