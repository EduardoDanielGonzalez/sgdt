, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChequesModel } from '../../../models/cheques-model';
import { ChequesService } from '../../../services/cheques.service';

@Component({
  selector: 'app-cheques-edit',
  templateUrl: './cheques-edit.component.html',
  styleUrls: ['./cheques-edit.component.css']
})
export class ChequesEditComponent implements OnInit {
  
  @ViewChild('content', {static: false}) contenidoDelModal;
  
  closeResult = '';

  constructor(private service: ChequesService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.openEdit();
  }
  
  openEdit() {
        const modalRef = this.modalService.open(contenidoDelModal, {ariaLabelledBy: 'modal-title', backdrop: 'static', size: 'xl', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      window.alert(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
