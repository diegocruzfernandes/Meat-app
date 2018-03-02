import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from 'app/order/order.mode';
import { validateConfig } from '@angular/router/src/config';



@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;
  orderForm: FormGroup;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON' },
    {label: 'Cartão de Débito', value: 'DEB' },
    {label: 'Cartão Refeição', value: 'REF' }
  ];

  constructor(
    private oderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo })
  }

  static equalsTo(group: AbstractControl): { [key:string]: boolean}{
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation){
      return undefined;
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch: true}
    }
    return undefined;
  }

  itemsValue():number{
    return this.oderService.itemsValue();
  }

  cartItems(): CartItem[]{
   return this.oderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.oderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.oderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.oderService.remove(item);
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
    .map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id));
    this.oderService.checkOrder(order)
    .subscribe((orderId: string) =>{
      this.router.navigate(['/order-summary']);
      this.oderService.clear();
    })
    console.log(order);
  }

}
