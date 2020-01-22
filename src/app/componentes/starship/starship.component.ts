import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Starship } from '../../models/starships.model';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship: Starship;

  constructor(public service: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getStarship( id ).subscribe( (data: Starship) => {
      this.starship = data;
      $('html, body').animate({scrollTop: $('#starship').position().top}, 'slow');
    },
    (error) => {
      // API NO DISPONIBLE
    });
  }

}
