import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { RestaurantdetailComponent } from './restaurantdetail/restaurantdetail.component';
import { ReviewrestaurantComponent } from './reviewrestaurant/reviewrestaurant.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: RestaurantComponent },
  {path: '', pathMatch: 'full', redirectTo: '/restaurants'},
  {path: 'restaurants', component: RestaurantComponent},
  {path: 'restaurants/new', component: NewrestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantdetailComponent},
  {path: 'restaurants/:id/review', component: ReviewrestaurantComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
