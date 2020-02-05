import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: []
})
export class PeopleComponent {

  people: any[] = [];

  constructor( private router: ActivatedRoute,
               private service: ServiceService ) { 
      this.router.params.subscribe( params => {
        this.getPeople( params['id'] );
      });
  }

  getPeople( id: string) {
    this.service.getPeople(id)
        .subscribe( (people: any) => {
          console.log(people);
          this.people = people;
        });
  }
}
