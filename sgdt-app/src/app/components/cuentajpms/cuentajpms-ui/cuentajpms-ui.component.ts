import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentajpms-ui',
  templateUrl: './cuentajpms-ui.component.html',
  styleUrls: ['./cuentajpms-ui.component.css']
})
export class CuentajpmsUiComponent implements OnInit {

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
