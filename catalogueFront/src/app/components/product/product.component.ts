import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ManageService} from "../../services/manage.service";
import {isLowerCase, isUpperCase} from "tslint/lib/utils";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @ts-ignore
  public listProducts: any;
  public size = 2;
  public currentPage = 0;
  public currentkw: string;
  public totalPages;
  public pages:Array<number>;


  constructor(private service: ManageService) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.currentkw="";
    this.service.getProducts(this.currentPage,this.size).subscribe(data =>{
      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>((this.totalPages));
      this.listProducts = data;
    },error => {
      console.log(error);
    })
  }

  onPageProduct(i){
    this.currentPage=i;
    this.onSearchProduct()
  }

  onSearch(form: any)
  {
    this.currentPage=0;
    this.currentkw = form.keyword;
      this.onSearchProduct()

  }

  onSearchProduct() {
    this.service.getProductsByKw(this.currentkw.toLowerCase(),this.currentPage,this.size).subscribe(data =>{
      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>((this.totalPages));
      this.listProducts = data;
    },error => {
      console.log(error);
    })
  }

  onDeleteProduct(p) {
    let conf = confirm("Are you sure ?");
    if(conf)
    {
      this.service.deleteProduct(p._links.self.href).subscribe(data=>{
        this.onSearchProduct();
      },error=>{
        console.log(error);
      });
    }
  }
}
