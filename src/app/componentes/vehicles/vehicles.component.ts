import { Component, OnInit } from '@angular/core';
import { Vehicles, Vehicle } from '../../models/vehicles.model';
import { ServiceService } from '../../service/service.service';

declare var $: any;

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  previous: string;
  next: string;

  constructor( public service: ServiceService ) {}

  ngOnInit() {
    this.service.getVehicles().subscribe( (data: Vehicles) => {
      this.previous = data.previous;
      this.next = data.next;
      this.vehicles = data.results;
      $('html, body').animate({scrollTop: $('#vehicles').position().top}, 'slow');
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

  getPrevious() {
    if (this.previous ) {
      this.service.getVehiclesURL( this.previous ).subscribe( (data: Vehicles) => {
        this.previous = data.previous;
        this.next = data.next;
        this.vehicles = data.results;
        $('html, body').animate({scrollTop: $('#starships').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }

  getNext() {
    if (this.next ) {
      this.service.getVehiclesURL( this.next ).subscribe( (data: Vehicles) => {
        this.previous = data.previous;
        this.next = data.next;
        this.vehicles = data.results;
        $('html, body').animate({scrollTop: $('#vehicles').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }
}

