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
  
  currentId: any;

  constructor(private service: ChequesService, public datasservice: DatasService, public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
    this.currentId = this.datasservice.getValor();
  }

}
