import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {
  species: any[]= [];
  constructor( private service: ServiceService,
    private router: Router ) { 
      this.service.getSpecies()
      .subscribe( (data: any) => {
        console.log(data);
        console.log(data['results']);
        this.species = data;
    });

     }

  ngOnInit() {
  }

}
