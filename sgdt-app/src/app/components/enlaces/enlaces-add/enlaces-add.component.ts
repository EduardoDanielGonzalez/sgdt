import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NextTabDirective } from '../../../directives/next-tab.directive';

import { EnlacesModel } from '../../../models/enlaces-model';
import { EnlacesService } from '../../../services/enlaces.service';

@Component({
  selector: 'app-enlaces-add',
  templateUrl: './enlaces-add.component.html',
  styleUrls: ['./enlaces-add.component.css']
})
export class EnlacesAddComponent implements OnInit {

  enlace: EnlacesModel = {
    titulo: '',
    url: ''
  }

  submitted = false;

  constructor(
    private enlacesService: EnlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveEnlace(): void {
    const data = {
      titulo: this.enlace.titulo,
      url: this.enlace.url
    };

    this.enlacesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/enlaces']);
        },
        error => {
          console.log(error);
        });
  }

  newEnlace(): void {
    this.submitted = false;
    this.enlace = {
      titulo: '',
      url: ''
    };
  }

}
