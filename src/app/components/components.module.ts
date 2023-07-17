import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CartListComponent} from "../pages/cart/cart-list/cart-list.component";
import {CartDetailComponent} from "../pages/cart/cart-detail/cart-detail.component";
import {AddCartComponent} from "../pages/cart/add-cart/add-cart.component";
import {UpdateCartComponent} from "../pages/cart/update-cart/update-cart.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CartListComponent,
    CartDetailComponent,
    AddCartComponent,
    UpdateCartComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
