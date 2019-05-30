import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RestaurantdetailComponent } from './restaurantdetail/restaurantdetail.component';
import { ReviewrestaurantComponent } from './reviewrestaurant/reviewrestaurant.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    NewrestaurantComponent,
    RestaurantComponent,
    PagenotfoundComponent,
    RestaurantdetailComponent,
    ReviewrestaurantComponent,
    EditrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
