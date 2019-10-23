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

}
