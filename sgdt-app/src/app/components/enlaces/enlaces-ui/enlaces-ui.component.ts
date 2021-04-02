import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlaces-ui',
  templateUrl: './enlaces-ui.component.html',
  styleUrls: ['./enlaces-ui.component.css']
})
export class EnlacesUiComponent implements OnInit {

  buscar = '';
  isBuscar = '';
  isButtonEnlacesAdd = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  receiveBuscar($event: any) {
    this.isBuscar = $event;
  }

  receiveButtonEnlacesAdd($event: any) {
    this.isButtonEnlacesAdd = true;
  }

}
