import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private restaurantsService: RestaurantService,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
