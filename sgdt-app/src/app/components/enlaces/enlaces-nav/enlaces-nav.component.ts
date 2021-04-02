import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enlaces-nav',
  templateUrl: './enlaces-nav.component.html',
  styleUrls: ['./enlaces-nav.component.css']
})
export class EnlacesNavComponent implements OnInit {
  
  @Output() enviaBuscar = new EventEmitter<string>();
  @Output() enviaButtonEnlacesAdd = new EventEmitter<any>();

  buscar = '';
  isButtonEnlaceAdd = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendBuscar() {
    this.enviaBuscar.emit(this.buscar);
  }

  sendButtonEnlacesAdd() {
    this.isButtonEnlaceAdd = true;
    this.enviaButtonEnlacesAdd.emit(this.isButtonEnlaceAdd);
  }

}