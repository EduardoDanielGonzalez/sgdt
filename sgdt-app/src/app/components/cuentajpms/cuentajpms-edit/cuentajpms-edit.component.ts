import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NextTabDirective } from '../../../directives/next-tab.directive';

import { CuentajpmsModel } from '../../../models/cuentajpms-model';
import { CuentajpmsService } from '../../../services/Cuentajpms.service';

@Component({
  selector: 'app-cuentajpms-edit',
  templateUrl: './cuentajpms-edit.component.html',
  styleUrls: ['./cuentajpms-edit.component.css']
})
export class CuentajpmsEditComponent implements OnInit {

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

  ngOnInit(): void {
    this.getCuentajpm(this.route.snapshot.params.id);
  }

  getCuentajpm(id: string): void {
    this.cuentajpmsService.get(id)
      .subscribe(
        data => {
          this.cuentajpm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCuentajpm(): void {
    this.cuentajpmsService.update(this.cuentajpm.id, this.cuentajpm)
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

}