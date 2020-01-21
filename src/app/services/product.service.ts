import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _URL = 'https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json'

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    let products = this.http.get(this._URL)
    console.log(products)
    return products
  }


}
