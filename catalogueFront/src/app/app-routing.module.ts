import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {NewProductComponent} from "./components/new-product/new-product.component";

const routes: Routes = [
  {
    path: "products", component: ProductComponent
  },
  {
    path: "new-product", component: NewProductComponent
  },
  {
    path: "", redirectTo:"/products", pathMatch:"full"
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
