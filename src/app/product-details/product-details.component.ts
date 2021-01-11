import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ServiceService} from '../services/service.service';
import{ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  index :any ;
 productDetails:any ={} ; 
//  productsArr:any;
//  product_obj:any;
  constructor(private productService:ServiceService, private productdetails:ActivatedRoute) {
    this.index=productdetails.snapshot.paramMap.get('id');
    //console.log(this.index)
  productService.getAllProducts().subscribe((data)=>{
    this.productDetails=data[this.index]
    // console.log(this.productDetails)
  });
}
  // getData(productData:any)
  // {
  //   this.product_obj=productData;
  //   //check if local storage has data or not to push array of products on it
  //   if(localStorage.getItem("items")==null)
  //   {
  //     this.productsArr=[];
  //     this.productsArr.push(productData);//productData -->passed parameter with product data
  //     localStorage.setItem("items",JSON.stringify(this.productsArr));

  //   }
  //   else
  //   {
  //     this.productsArr.push(productData)
  //     localStorage.setItem("items",JSON.stringify(this.productsArr));
  //   }
  // }

  ngOnInit(){
    //this.productService.getProductById()
    // this.productService.getSingleProduct(Number(this.productdetails.snapshot.params.id)).subscribe(res => {
    //   this.product=res;
    //   console.log(this.product)
    // });
    
    //console.log(this.productdetails.snapshot.params);
  //  this.data=;
  //  console.log(this.data)
  // this.index=this.productdetails.snapshot.paramMap.get("id");
  // console.log(this.index)
  // this.productService.getAllProducts().subscribe((data)=>{
  //       this.productDetails=data[this.index]
  //});
//   this.productService.read(this.index).subscribe(res=>this.productDetails=res)

// console.log(this.productDetails)
}

  }
  
