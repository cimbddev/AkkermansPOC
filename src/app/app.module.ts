import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { CustomerproductComponent } from './customerproduct/customerproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerModalPopUpComponent } from './customer-modal-pop-up/customer-modal-pop-up.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CustomerComponent,
    CustomerproductComponent,
    CustomerModalPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
	NgbModule
  ],
  providers: [ProductService,CustomerService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
