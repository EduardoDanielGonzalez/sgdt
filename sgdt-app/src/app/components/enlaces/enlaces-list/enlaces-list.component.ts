import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EnlacesModel } from '../../../models/enlaces-model';
import { EnlacesService } from '../../../services/enlaces.service';

@Component({
  selector: 'app-enlaces-list',
  templateUrl: './enlaces-list.component.html',
  styleUrls: ['./enlaces-list.component.css']
})
export class EnlacesListComponent implements OnChanges, OnInit {

  enlaces?: EnlacesModel[];
  currentEnlace?: EnlacesModel;
  currentIndex = -1;
  titulo = '';

  @Input() isBuscar: string;

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.isBuscar.currentValue !== changes.isBuscar.previousValue) {
      this.searchTitle();
    }
  }

  constructor(private enlacesService: EnlacesService) { }

  ngOnInit(): void {
    this.retrieveEnlaces();
  }

  retrieveEnlaces(): void {
    this.enlacesService.getAll()
      .subscribe(
        data => {
          this.enlaces = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.enlacesService.findByTitle(this.isBuscar)
      .subscribe(
        data => {
          this.enlaces = data;
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
