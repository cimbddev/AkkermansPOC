import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import Product from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product:Product=new Product();
  sub:Subscription;
  //resultMessage: string;
  
  constructor(    
    private route: ActivatedRoute,
	private router: Router,
	private productService: ProductService) { }

  ngOnInit() {
	  	  this.sub=this.route.params.subscribe(params=>{
		  const id=params['id'];
		  if(id){
			  this.productService.get(id).subscribe((product:any)=>{
				  if(product){
					  this.product=product;
				  }
				  else{
					console.log(`Product with id '${id}' not found, returning to list`);
					//this.gotoList();
				}
			  });
		  }
	  });
  }
  
      save(form: any){
		  //alert("enter");
	  this.productService.save(form).subscribe(
		result=>{
			//this.resultMessage="Product has been saved";
			//form.resetForm();
		},
		error=>console.error(error)
	  );
  }
  
    remove(id: number){
	  this.productService.remove(id).subscribe(
	  result=>{
		  //this.gotoList();
	  },
	  error=>{console.error(error);}
	  );
  }
  
  /*
  cancelSave(){
	  alert("Cancel");
	  this.product.name_product=null;
	  this.product.cost_product=' ';
	  this.product.amount_product=' ';
  }
  
  */

}
