import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChequesModel } from '../../../models/cheques-model';
import { ChequesService } from '../../../services/cheques.service';
import { DatasService } from '../../../services/datas.service';
import { ChequesEditComponent } from '../cheques-edit/cheques-edit.component';

@Component({
  selector: 'app-cheques-list',
  templateUrl: './cheques-list.component.html',
  styleUrls: ['./cheques-list.component.css']
})
export class ChequesListComponent implements OnInit {

  cheques?: ChequesModel[];
  currentPage = 1;
  currentCheque?: ChequesModel;
  currentIndex = -1;
  currentId = 0;
  numero: any = '';

  isCargando = false;
  
  myDatas = [];
  closeResult = '';
  
  @Input() isBuscar: string;

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes.isBuscar.currentValue !== changes.isBuscar.previousValue) {
      this.search();
    }
  }

  constructor(private service: ChequesService, public datasservice: DatasService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieve();
  }
  
  openEdit(idEdit:any) {
    
    this.datasservice.setValor(idEdit);
     
    const modalRef = this.modalService.open(ChequesEditComponent, {ariaLabelledBy: 'modal-title', backdrop: 'static', size: 'xl', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      window.alert(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }
  
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  retrieve(): void {
    this.isCargando = true;
    this.service.getAll(this.currentPage - 1)
      .subscribe(
        data => {
          this.cheques = data;
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('Terminado')
          this.isCargando = false;
        });
  }

  pageAnt() {
    this.currentPage > 1 ? this.currentPage-- : this.currentPage;
    this.retrieve();
  }

  pageProx() {
    this.currentPage++;
    this.retrieve();
  }

  pageNum(pagina: number) {
    this.currentPage = pagina;
    this.retrieve();
  }


  search(): void {
    this.service.findBy(this.isBuscar)
      .subscribe(
        data => {
          this.cheques = data;
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
