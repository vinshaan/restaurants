import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  addRestaurant(restaurant){
    return this._http.post('/add_restaurant', restaurant);
  }
  addReview(id, review){
    return this._http.post(`/add_review/${id}`, review);
  }
  editRestaurant(id, data){
    return this._http.put(`/edit_restaurant/${id}`, data);
  }
  getRestaurants(){
    return this._http.get('/get_restaurants');
  }
  getRestaurantById(id){
    return this._http.get(`/get_restaurant_by_id/${id}`);
  }
  deleteRestaurant(id){
    return this._http.delete(`/delete_restaurant/${id}`);
  }
  getRestaurantByName(name){
    return this._http.get(`/get_restaurant_by_name/${name}`);
  }
}
