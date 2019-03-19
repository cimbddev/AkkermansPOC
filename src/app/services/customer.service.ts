import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Customer from '../models/Customer';

@Injectable()
//@Injectable({
  //providedIn: 'root'
//})
export class CustomerService {

 //public API='http://192.168.51.211:9888/api'; // will be taken to a common place later
 //public API='http://localhost:60417/api';
 public API='https://financialservices1.azurewebsites.net/api';
 public CUSTOMER_API=`${this.API}/Customer`;
 
  constructor(private http: HttpClient) { }
  
  getCustomers():Observable<Array<Customer>>{
	  return this.http.get<Array<Customer>>(this.CUSTOMER_API+'/getCustomers');
  }
  
    get(id: number){
	  return this.http.get(this.CUSTOMER_API+"/"+id);
  }
  
    save(customer: Customer): Observable<Customer>{
	  let result: Observable<Customer>;
	  if(customer.id){
		  result=this.http.put<Customer>(this.CUSTOMER_API+'/'+customer.id,customer);
	  }
	  else{
		  //alert("Save"+JSON.stringify(customer));
		  result=this.http.post<Customer>(this.CUSTOMER_API+"/saveCustomer/",customer);
	  }
	  return result;
  }
  
    remove(id: number){
	  return this.http.delete(this.CUSTOMER_API+'/delCustomer/'+ id);
  }
  
}
