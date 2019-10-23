import { Component, OnInit } from '@angular/core';
import {ManageService} from "../../services/manage.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public listProducts: any;
  public size = 2;
  public currentPage = 0;
  public totalPages;
  public pages:Array<number>;


  constructor(private service: ManageService) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.service.getProducts(this.currentPage,this.size).subscribe(data =>{
      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>((this.totalPages));
      this.listProducts = data;
    },error => {
      console.log(error);
    })
  }
}
