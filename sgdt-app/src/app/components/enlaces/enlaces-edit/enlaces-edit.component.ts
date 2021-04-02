import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NextTabDirective } from '../../../directives/next-tab.directive';

import { EnlacesModel } from '../../../models/enlaces-model';
import { EnlacesService } from '../../../services/enlaces.service';

@Component({
  selector: 'app-enlaces-edit',
  templateUrl: './enlaces-edit.component.html',
  styleUrls: ['./enlaces-edit.component.css']
})
export class EnlacesEditComponent implements OnInit {

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

  ngOnInit(): void {
    this.getEnlace(this.route.snapshot.params.id);
  }

  getEnlace(id: string): void {
    this.enlacesService.get(id)
      .subscribe(
        data => {
          this.enlace = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEnlace(): void {
    this.enlacesService.update(this.enlace.id, this.enlace)
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

}
