import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
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
        private http: Http
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
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.apiUrl}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id);
    }
    clear(){
        this.cartService.clear();
    }
}