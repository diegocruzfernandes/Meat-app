import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';
import { Order, OrderItem } from 'app/order/order.mode';
import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';


@Injectable()
export class OrderService {

    apiUrl: string = environment.apiUrl;

    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient
    ) {  }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }

    itemsValue(){
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string>{
        return this.http.post<Order>(`${this.apiUrl}/orders`, order)
        .map(order => order.id);
    }
    clear(){
        this.cartService.clear();
    }
}