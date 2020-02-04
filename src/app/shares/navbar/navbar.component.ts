import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent{

  constructor() { }

  buscar( termino: string){
    console.log('el termino es', termino);
  }

}
