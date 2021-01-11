import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
   {path:"",component:HomeComponent} ,
   {path:"product-details/:id",component:ProductDetailsComponent},
   {path:"cart",component:CartComponent} ,
   {path:"profile",component:ProfileComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
