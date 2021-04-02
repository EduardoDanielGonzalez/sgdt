import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NextTabDirective } from '../../../directives/next-tab.directive';

import { CuentajpmsModel } from '../../../models/cuentajpms-model';
import { CuentajpmsService } from '../../../services/Cuentajpms.service';

@Component({
  selector: 'app-cuentajpms-add',
  templateUrl: './cuentajpms-add.component.html',
  styleUrls: ['./cuentajpms-add.component.css']
})
export class CuentajpmsAddComponent implements OnInit {

  cuentajpm: CuentajpmsModel = {
    banco: '',
    sucursal: '',
    cuenta: ''
  }

  submitted = false;

  constructor(
    private cuentajpmsService: CuentajpmsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveCuentajpm(): void {
    const data = {
      banco: this.cuentajpm.banco,
      sucursal: this.cuentajpm.sucursal,
      cuenta: this.cuentajpm.cuenta
    };

    this.cuentajpmsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/cuentasjpm']);
        },
        error => {
          console.log(error);
        });
  }

  newCuentajpm(): void {
    this.submitted = false;
    this.cuentajpm = {
      banco: '',
      sucursal: '',
      cuenta: ''
    };
  }

}
