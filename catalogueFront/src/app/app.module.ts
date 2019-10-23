import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { NewProductComponent } from './components/new-product/new-product.component';
import {HttpClientModule} from "@angular/common/http";
import {ManageService} from "./services/manage.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
