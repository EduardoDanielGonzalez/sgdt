import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheques-ui',
  templateUrl: './cheques-ui.component.html',
  styleUrls: ['./cheques-ui.component.css']
})
export class ChequesUiComponent implements OnInit {

  buscar = '';
  isBuscar = '';
  isButtonAdd = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  receiveBuscar($event: any) {
    this.isBuscar = $event;
  }

  receiveButtonAdd($event: any) {
    this.isButtonAdd = true;
  }

}
