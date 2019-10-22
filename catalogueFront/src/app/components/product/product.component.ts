import { Component, OnInit } from '@angular/core';
import {ManageService} from "../../services/manage.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public listProducts: any;

  constructor(private service: ManageService) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.service.getProducts().subscribe(data =>{
      this.listProducts = data;
    },error => {
      console.log(error);
    })
  }
}
