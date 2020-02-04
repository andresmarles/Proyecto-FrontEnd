import { Component, OnInit } from '@angular/core';
import { Planets, Planet } from '../../models/planets.model';
import { ServiceService } from '../../service/service.service';

declare var $: any;

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];
  previous: string;
  next: string;

  constructor( public service: ServiceService ) {}

  ngOnInit() {
    this.service.getPlanets().subscribe( (data: Planets) => {
      this.previous = data.previous;
      this.next = data.next;
      this.planets = data.results;
      $('html, body').animate({scrollTop: $('#planets').position().top}, 'slow');
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

  getPrevious() {
    if (this.previous ) {
      this.service.getPlanetsURL( this.previous ).subscribe( (data: Planets) => {
        this.previous = data.previous;
        this.next = data.next;
        this.planets = data.results;
        $('html, body').animate({scrollTop: $('#planets').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }

  getNext() {
    if (this.next ) {
      this.service.getPlanetsURL( this.next ).subscribe( (data: Planets) => {
        this.previous = data.previous;
        this.next = data.next;
        this.planets = data.results;
        $('html, body').animate({scrollTop: $('#planets').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }
}
