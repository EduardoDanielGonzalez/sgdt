import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EnlacesModel } from '../../../models/enlaces-model';
import { EnlacesService } from '../../../services/enlaces.service';

@Component({
  selector: 'app-enlaces-del',
  templateUrl: './enlaces-del.component.html',
  styleUrls: ['./enlaces-del.component.css']
})
export class EnlacesDelComponent implements OnInit {

  enlace: EnlacesModel = {
    titulo: '',
    url: '',
    createdAt: ''
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

  deleteEnlace(): void {
    this.enlacesService.delete(this.enlace.id)
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