import { Component, OnInit } from '@angular/core';
//import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-modal-pop-up',
  templateUrl: './customer-modal-pop-up.component.html',
  styleUrls: ['./customer-modal-pop-up.component.css']
})
export class CustomerModalPopUpComponent implements OnInit {

  //constructor(private  dialogRef:  MatDialogRef<CustomerModalPopUpComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }
 closeResult: string;
   constructor(private modalService: NgbModal){}

  ngOnInit() {
  }
  
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
      return  `with: ${reason}`;
    }
  }
}
