import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {
  newRestaurant: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newRestaurant = {name: '', cuisine: ''}
  }

  onSubmit() {
    let observable = this._httpService.addRestaurant(this.newRestaurant)
    observable.subscribe(data => {
      this.router.navigate(['/restaurants']);
    })
    this.newRestaurant = {name: '', cuisine: ''}
  }

  onKey(name: any) {
    let obs = this._httpService.getRestaurantByName(name);
    obs.subscribe(res => {
      if (res['restaurants'] == null) {
        this.newRestaurant.error = "";
      }
      else {
        this.newRestaurant.error = "Name is taken";
      }
      console.log('Restaurant by ID', res);
      })     
  
}

}
