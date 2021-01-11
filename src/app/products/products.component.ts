// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';
import {ServiceService} from '../services/service.service';
import {CartService} from '../services/cart.service';

export class product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public category: string,
    public image: string
  ) {
  }
 }
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  // products:any;
  Prdoucts  = [];
  productsArr:any;
  product_obj:any;
  searchText:any;
  constructor( private productService:ServiceService) {
    this.productService.getAllProducts().subscribe((data)=>{
    this.Prdoucts=data;
    //console.log(this.products);
  }) }
  getData(productData:any)
  {
    this.product_obj=productData;
    //check if local storage has data or not to push array of products on it
    if(localStorage.getItem("items")==null)
    {
      this.productsArr=[];
      this.productsArr.push(productData);//productData -->passed parameter with product data
      localStorage.setItem("items",JSON.stringify(this.productsArr));

    }
    else
    {
      this.productsArr.push(productData)
      localStorage.setItem("items",JSON.stringify(this.productsArr));
    }
  }
  ngOnInit(): void {
   
   
   
  
  }
}


