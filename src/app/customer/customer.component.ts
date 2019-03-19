import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import Customer from '../models/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:Customer=new Customer();
  sub:Subscription;
  
  constructor(    
	private route: ActivatedRoute,
	private router: Router,
	private customerService: CustomerService) { }

	
  ngOnInit() {
	  	  this.sub=this.route.params.subscribe(params=>{
		  const id=params['id'];
		  if(id){
			  this.customerService.get(id).subscribe((customer:any)=>{
				  if(customer){
					  this.customer=customer;
				  }
				  else{
					console.log(`Customer with id '${id}' not found, returning to list`);
					//this.gotoList();
				}
			  });
		  }
	  });
  }
    
  save(form: any){
		  //alert("enter");
	  this.customerService.save(form).subscribe(
		result=>{
			//this.gotoList();
		},
		error=>console.error(error)
	  );
  }
  
  remove(id: number){
	  this.customerService.remove(id).subscribe(
	  result=>{
		  //this.gotoList();
	  },
	  error=>{console.error(error);}
	  );
  }

}
