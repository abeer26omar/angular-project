import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor( public HttpClient:HttpClient) {
   HttpClient.get("https://fakestoreapi.com/products")
  }
  getAllProducts():Observable<any>
  {
    return this.HttpClient.get("https://fakestoreapi.com/products");
  }
  
// products:any;
  //constructor(private http:HttpClient) { }
  //getProducts(){
  //  let products:any;
    //return this.http.get('https://fakestoreapi.com/products')
    // console.log( this.products);
      // return products;
  //}
  //getProductById(id:number){
  
    //  return this.http.get(`https://fakestoreapi.com/products/${id}`);
    
  //}
  
}

