import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerproductComponent } from './customerproduct/customerproduct.component';

const routes: Routes = [
{path: '', component:CustomerproductComponent},
{path: 'product',component: ProductComponent },
{path: 'customer', component: CustomerComponent},
{path: 'customerproduct', component: CustomerproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
