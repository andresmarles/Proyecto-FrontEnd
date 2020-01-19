import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Starships, Starship } from '../../models/starships.model';

declare var $: any;

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[];
  previous: string;
  next: string;

  constructor( public service: ServiceService ) {}

  ngOnInit() {
    this.service.getStarships().subscribe( (data: Starships) => {
      this.previous = data.previous;
      this.next = data.next;
      this.starships = data.results;
      $('html, body').animate({scrollTop: $('#starships').position().top}, 'slow');
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

  getPrevious() {
    if (this.previous ) {
      this.service.getStarshipsURL( this.previous ).subscribe( (data: Starships) => {
        this.previous = data.previous;
        this.next = data.next;
        this.starships = data.results;
        $('html, body').animate({scrollTop: $('#starships').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }

  getNext() {
    if (this.next ) {
      this.service.getStarshipsURL( this.next ).subscribe( (data: Starships) => {
        this.previous = data.previous;
        this.next = data.next;
        this.starships = data.results;
        $('html, body').animate({scrollTop: $('#starships').position().top}, 'slow');
      },
      (error) => {
        // API NO DISPONIBLE
      });
    }
  }
}
