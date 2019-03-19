import { Injectable,Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../models/Product';
//import { ResponseContentType} from '@angular/http'.

@Injectable()
//@Injectable({
  //providedIn: 'root'
//})
export class ProductService {

 //public API='http://192.168.51.211:9888/api'; // will be taken to a common place later
 //public API='http://localhost:60417/api';
 public API='https://financialservices1.azurewebsites.net/api';
 public PRODUCT_API=`${this.API}/Products`;
 
  constructor(private http: HttpClient) { }
  
  getProducts():Observable<Array<Product>>{
	  return this.http.get<Array<Product>>(this.PRODUCT_API+'/getProducts');
  }
  
  get(id: number){
	  //alert(id);
	  return this.http.get(this.PRODUCT_API+"/"+id);
  }
  
    save(product: Product): Observable<Product>{
		//alert("service:"+JSON.stringify(product));
	  let result: Observable<Product>;
	  if(product.id){
		  result=this.http.put<Product>(this.PRODUCT_API+'/'+product.id,product);
	  }
	  else{
		  //alert("Save"+JSON.stringify(product));
		  result=this.http.post<Product>(this.PRODUCT_API+"/saveProduct/",product);
	  }
	  return result;
  }
  
    remove(id: number){
	  return this.http.delete(this.PRODUCT_API+'/delProduct/'+ id);
  }
  
    exportData(cid: number, pid: number):Observable<any>{
	  //alert(cid+" service "+pid);
	 /*
	 this.authKey = localStorage.getItem('jwt_token');
	 const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'text/plain',
		'Authorization' : this.authKey,
		responseType: 'blob' as 'json'
		Accept : 'text/html',
		observe : 'response'
	  })
	};
	*/
	
	/*
	const httpOptions = {
	  responseType: 'blob' as 'json',
	  headers: new HttpHeaders({
		'Authorization': this.authKey,

	  })
	};
  */
	  const headers = new HttpHeaders().set('Content-Type', 'text/plain');
	  return this.http.get(this.PRODUCT_API+'/exporttofile/'+ cid+"/"+pid,{ headers, responseType: 'blob'});
  }
  
}
