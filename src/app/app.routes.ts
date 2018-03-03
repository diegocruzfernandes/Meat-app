import { Routes } from '@angular/router';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewComponent } from 'app/restaurants/restaurant-detail/review/review.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';


export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewComponent }
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent}
]