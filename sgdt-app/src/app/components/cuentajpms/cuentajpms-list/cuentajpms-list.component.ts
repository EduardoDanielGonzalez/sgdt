import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CuentajpmsModel } from '../../../models/cuentajpms-model';
import { CuentajpmsService } from '../../../services/Cuentajpms.service';

@Component({
  selector: 'app-cuentajpms-list',
  templateUrl: './cuentajpms-list.component.html',
  styleUrls: ['./cuentajpms-list.component.css']
})
export class CuentajpmsListComponent implements OnInit {

  cuentajpms?: CuentajpmsModel[];
  currentCuentajpm?: CuentajpmsModel;
  currentIndex = -1;
  cuenta = '';

  @Input() isBuscar: string;

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.isBuscar.currentValue !== changes.isBuscar.previousValue) {
      this.searchCuenta();
    }
  }

  constructor(private cuentajpmsService: CuentajpmsService) { }

  ngOnInit(): void {
    this.retrieveCuentajpms();
  }

  retrieveCuentajpms(): void {
    this.cuentajpmsService.getAll()
      .subscribe(
        data => {
          this.cuentajpms = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchCuenta(): void {
    this.cuentajpmsService.findByCuenta(this.isBuscar)
      .subscribe(
        data => {
          this.cuentajpms = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  receiveIsBuscar($event: any) {
    this.isBuscar = $event;
  }

}
