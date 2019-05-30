import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants = [];
  selectedRestaurant: any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedRestaurant = null;
    this.getRestaurantsFromService();
  }
  getRestaurantsFromService(){
    let observable = this._httpService.getRestaurants()
    observable.subscribe(data => {
      this.restaurants = data['restaurants'];
    })
  }

  editRestaurant(restaurant){
    this.selectedRestaurant = restaurant;
  }
  cancel() {
    this.selectedRestaurant = null;
  }

  deleteRestaurant(id){
    console.log(id);
    let observable = this._httpService.deleteRestaurant(id)
    observable.subscribe(data => {
    
    })
    this.getRestaurantsFromService();
    this.router.navigate['/restaurants'];
  }

}
