import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts :any;
  quantity:any;
  // totalprice:number=0;
  qun=0;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("items") != null){
      this.cartProducts=JSON.parse(localStorage.getItem("items") ||'{}');

    }
}
plus()
{
  if(this.qun!=20){
    this.qun++;
    this.quantity=this.qun;
  }
}
minus(){
  if(this.qun!=1)
  {
    this.qun--;
    this.quantity=this.qun;
  }
}
///gives me an error at line 42 that totalprice is not defined and dont know why?!
// totPrice(){
//   for(let i=0;i<this.cartProducts.length;i++)
//   {
//     this.totalprice+=this.cartProducts[i].price;
//   }
//   return Math.round(this.totalPrice);
// }

//delete order
deleteProduct(item :any)
{
  this.cartProducts=JSON.parse(localStorage.getItem("items")||'{}');
  for(let i=0;i<this.cartProducts.length;i++)
  {
    if (this.cartProducts[i]['id']==item.id){
      this.cartProducts.splice(i,1);
      localStorage.setItem('items',JSON.stringify(this.cartProducts));
  
    }
  }
}
}
