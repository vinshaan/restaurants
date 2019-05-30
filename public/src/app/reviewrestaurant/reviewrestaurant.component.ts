import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewrestaurant',
  templateUrl: './reviewrestaurant.component.html',
  styleUrls: ['./reviewrestaurant.component.css']
})
export class ReviewrestaurantComponent implements OnInit {
  review: any;
  id: any;
  restaurant: any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.review = {customer_name: '', stars: '', description: ''}
    this.getRestaurantById();
  }

  getRestaurantById(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      let obs = this._httpService.getRestaurantById(this.id);
      obs.subscribe(res => {
        console.log('Restaurant by ID', res);
        this.restaurant = res['restaurants'];

      })
    })
  }

  onSubmit(id): void {
    let observable = this._httpService.addReview(id, this.review)
    console.log("This is the id: ", id);
    observable.subscribe(data => {
      this.router.navigate(['/restaurants', this.id]);
    })
    this.review = {customer_name: '', stars: '', description: ''}
  }

}
