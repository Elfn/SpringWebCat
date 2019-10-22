import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  public host: String = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts()
  {
    return this.http.get(this.host+"/productsList")
  }

}
