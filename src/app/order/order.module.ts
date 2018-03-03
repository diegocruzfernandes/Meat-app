import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { DeviveryCostsComponent } from './devivery-costs/devivery-costs.component';
import { OrderComponent } from 'app/order/order.component';
import { OrderItemComponent } from 'app/order/order-item/order-item.component';

const  ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations:[
        OrderComponent,
        OrderItemComponent,
        DeviveryCostsComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]   
})
export class OrderModule{

}