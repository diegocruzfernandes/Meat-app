import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from './../../environments/environment';
import { Restaurant } from './restaurant/restaurant.model';
import { ErrorHandler } from 'app/app.error-handler';


@Injectable()
export class RestaurantService{
   
    private url = environment.apiUrl + '/restaurants';
      
    constructor(private http: HttpClient){}

    restaurant(search?:string ): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if(search){
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Restaurant[]>(this.url, {params:params})
    }

    retaurantyById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(this.url+'/'+ id)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${this.url}/${id}/reviews`)
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string):Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${this.url}/${id}/menu`)
    }
}