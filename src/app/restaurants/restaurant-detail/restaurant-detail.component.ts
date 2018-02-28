import { Restaurant } from './../restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantService,
    private activeteRoute: ActivatedRoute  
  ) { }

  ngOnInit() {
    
    this.restaurantsService.retaurantyById(this.activeteRoute.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);
  }

}
