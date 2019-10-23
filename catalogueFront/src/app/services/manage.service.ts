import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  public host: String = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts(page: number, size:number)
  {
    return this.http.get(this.host+"/products?page="+page+"&size="+size)
  }

  getProductsByKw(kw: string, page: number, size:number)
  {
    return this.http.get(this.host+"/products/search/byDescriptionPage?kw="+kw+"&page="+page+"&size="+size)
  }

  deleteProduct(url)
  {
    return this.http.delete(url)
  }

}
