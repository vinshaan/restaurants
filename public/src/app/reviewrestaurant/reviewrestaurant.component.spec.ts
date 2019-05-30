import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewrestaurantComponent } from './reviewrestaurant.component';

describe('ReviewrestaurantComponent', () => {
  let component: ReviewrestaurantComponent;
  let fixture: ComponentFixture<ReviewrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
