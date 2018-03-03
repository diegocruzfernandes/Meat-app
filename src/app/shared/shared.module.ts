import { OrderService } from './../order/order.service';
import { RestaurantService } from './../restaurants/restaurant.service';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { RatingComponent } from 'app/shared/rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from 'app/shared/messages/notification.service';


RadioComponent

@NgModule({
    declarations:[
        RadioComponent,
        InputComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RadioComponent,
        InputComponent,
        RatingComponent,
        SnackbarComponent,
        //Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers:[
                ShoppingCartService,
                RestaurantService,
                OrderService,
                NotificationService
            ]
        }
    }
}