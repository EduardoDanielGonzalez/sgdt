import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cheques-nav',
  templateUrl: './cheques-nav.component.html',
  styleUrls: ['./cheques-nav.component.css']
})
export class ChequesNavComponent implements OnInit {

  @Output() enviaBuscar = new EventEmitter<string>();
  @Output() enviaButtonAdd = new EventEmitter<any>();

  buscar = '';
  isButtonAdd = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendBuscar() {
    this.enviaBuscar.emit(this.buscar);
  }

  sendButtonAdd() {
    this.isButtonAdd = true;
    this.enviaButtonAdd.emit(this.isButtonAdd);
  }

}
