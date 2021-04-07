import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChequesModel } from '../../../models/cheques-model';
import { ChequesService } from '../../../services/cheques.service';
import { DatasService } from '../../../services/datas.service';


@Component({
  selector: 'app-cheques-edit',
  templateUrl: './cheques-edit.component.html',
  styleUrls: ['./cheques-edit.component.css']
})
export class ChequesEditComponent implements OnInit {
  
  currentEdit: any;
  currentId: number;

  constructor(private dbService: ChequesService, private datasService: DatasService, public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
    this.currentId = this.datasService.getDatas().id;
    this.getForId(this.currentId);
  }
  
  getForId(id: number): void {
    this.dbService.get(id)
      .subscribe(
        data => {
          this.currentEdit = data;
        },
        error => {
          console.log(error);
        });
  }

}
