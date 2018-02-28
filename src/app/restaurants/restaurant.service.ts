import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from './../../environments/environment';
import { Restaurant } from './restaurant/restaurant.model';
import { ErrorHandler } from 'app/app.error-handler';


@Injectable()
export class RestaurantService{
   
    private url = environment.apiUrl + '/restaurants';
      
    constructor(private http: Http){}

    restaurant(): Observable<Restaurant[]> {
        return this.http.get(this.url)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
        
    }

    retaurantyById(id: string): Observable<Restaurant>{
        return this.http.get(this.url+'/'+ id)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${this.url}/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string):Observable<MenuItem[]>{
        return this.http.get(`${this.url}/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}