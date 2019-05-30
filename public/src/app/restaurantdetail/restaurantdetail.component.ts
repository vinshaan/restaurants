import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';



@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css'],
 
})
export class RestaurantdetailComponent implements OnInit {
  restaurant: any;
  id: any;
  array: any[]; 
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.restaurant = {name: '', cuisine: ''}
    this.getRestaurantById();
  }

  getRestaurantById(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      let obs = this._httpService.getRestaurantById(this.id);
      obs.subscribe(res => {
        console.log('Restaurant by ID', res);
        this.restaurant = res['restaurants'];
        console.log("look here*********", this.restaurant);
      })
    })
  }

}
