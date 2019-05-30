import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent implements OnInit {
  @Input() editRestaurant: any;
  @Input() selectedRestaurant: null;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getRestaurantsFromService();
  }
  getRestaurantsFromService(){
    let observable = this._httpService.getRestaurants()
    observable.subscribe(data => {
    })
  }

  onSubmit(form: NgForm, id) {
    console.log(id);
    let observable = this._httpService.editRestaurant(id, form.value);
    observable.subscribe(res => {
      this.editRestaurant = res['restaurants'];
        })
    this.router.navigate(['/restaurants']);
    this.editRestaurant = {name: '', cuisine: ''}
  }

}
