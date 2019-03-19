import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Customer from '../models/Customer';
import Product from '../models/Product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//https://ng-bootstrap.github.io/#/components/modal/examples 'for modal popup'


@Component({
  selector: 'app-customerproduct',
  templateUrl: './customerproduct.component.html',
  styleUrls: ['./customerproduct.component.css']
})


export class CustomerproductComponent implements OnInit {
  customers: any; // model instance
  products: any;
  closeResult: string="";
  sub:Subscription;
  selectUndefinedOptionValue:any; //for default option in select
  customerproductc:any;
  customerproductp:any;
  
  constructor(	
    private route: ActivatedRoute,
	private router: Router,
	private modalService: NgbModal,
	private customerService: CustomerService,
	private productService: ProductService) { }
	

  ngOnInit() {
	  this.loadCustomers();
	  this.loadProducts();
  }
  
    loadCustomers(){
	  this.customerService.getCustomers().subscribe(dataCust=>{
		  this.customers=dataCust;
	  });
  }
  
    loadProducts(){
	  this.productService.getProducts().subscribe(dataProd=>{
		  this.products=dataProd;
	  });
  }

    open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
	  //this.closeResult="Data has been saved";
    }, (reason) => {
		//alert(reason);
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  
  
    save(form: any){
		  var s=JSON.stringify(form);
		  //alert(s);
		  var d = JSON.parse(s);
			//alert(d['customer_name'])

	if(d['customer_name']!="" && d['customer_name']!=undefined){
		//alert("En");
		  this.customerService.save(form).subscribe(
			result=>{
				//this.modalService.close();
				this.loadCustomers();
			},
			error=>{console.error(error);}
		  );
	}
	else{
		//alert("s");
		  this.productService.save(form).subscribe(
			result=>{
				this.loadProducts();
			},
			error=>{console.error(error);}
		  );
		}
  }
  
  deleteCustomer(id){
	   //alert(id);
	   //var customer={};
	   //customer.id=id;
	   this.customerService.remove(id).subscribe(result=>{
			this.loadCustomers();
			},
			error=>{console.error(error);}
	   );
  }
  
    deleteProduct(id){
	   //alert(id);
	   //var customer={};
	   //customer.id=id;
	   this.productService.remove(id).subscribe(result=>{
			this.loadProducts();
			},
			error=>{console.error(error);}
	   );
  }
  
  exportdata(cid,pid):void{
	  //alert(cid+" "+pid):

	  this.productService.exportData(cid,pid).subscribe(result=>{
		  //this._save(response);
				/*
				  var newBlob = new Blob([result], { type: "application/octet-stream" });
					if (window.navigator && window.navigator.msSaveOrOpenBlob) {
						window.navigator.msSaveOrOpenBlob(newBlob);
						return;
				*/
				
				 //this.blob = new Blob([result], {type: 'text/plain'});
				 //alert(JSON.stringify(result));

				  var downloadURL = window.URL.createObjectURL(result);
				  var link = document.createElement('a');
				  link.href = downloadURL;
				  link.download = "customer-product.txt";
				  link.click();
	  },
		error=>{console.error(error);}
	  );
  }
  
   /*
    private _save(rawDocument: any): void {
		saveAs(rawDocument);
    }
  */
}
